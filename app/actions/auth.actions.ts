'use server';

import { generateId } from 'lucia';
import prisma from '../lib/prisma';
import { SignUpSchema, SignFormState, SignInSchema } from '../types';
import { Argon2id } from 'oslo/password';
import { lucia, validateRequest } from '../lib/auth';
import { cookies } from 'next/headers';
import { formatExpiredAt } from '../lib/utils';
import { redirect } from 'next/navigation';

export async function signUp (state: SignFormState, formData: FormData): Promise<SignFormState> {
	const PASSWORD_LENGTH_MAX = 50;
	const PASSWORD_LENGTH_MIN = 8;
	const rawPassword = formData.get('password') as string;
	
	if(rawPassword.length > PASSWORD_LENGTH_MAX || rawPassword.length < PASSWORD_LENGTH_MIN){
		return {
			success: false,
			errors: { password: [ `Password should be a min of ${ PASSWORD_LENGTH_MIN } characters and shouldn't exceed the limit of ${ PASSWORD_LENGTH_MAX } characters` ] }
		};
	};
	
	const formValues = {
		email: formData.get('email'),
		password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword'),
	};

	const userId = generateId(15);
	const validatedFields = SignUpSchema.safeParse(formValues);

	if (!validatedFields.success) {
		return {
			success: false,
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Create Account.',
		};
	};
	
	const hashedPassword = await new Argon2id().hash(rawPassword);
	if(hashedPassword){
		validatedFields.data.password = hashedPassword;
	};

	const { email, password } = validatedFields.data;

	try {
		await prisma.user.create({
			data: {
				id: userId,
				email,
				password,
			}
		}).then(async () => {  
			await prisma.$disconnect();  
		})  
			.catch(async (e) => {  
				console.error(e);  
				await prisma.$disconnect();  
				process.exit(1);  
			});
		
		const session = await lucia.createSession(userId, {
			expiresAt: formatExpiredAt(60 * 60 * 24 * 30),
			id: generateId(18),
			userId
		});
		const sessionCookie = lucia.createSessionCookie(session.id);
	
		cookies().set(
			sessionCookie.name,
			sessionCookie.value,
			sessionCookie.attributes
		);

		return {
			message: 'Account created successfully',
			success: true,
			data: { userId }
		};
	} catch (error: any) {
		return {
			message: 'Oups, la création du compte a échoué. Veuillez réessayer plus tard.',
			success: false,
		};
	}
};

export async function signIn (state: SignFormState, formData: FormData): Promise<SignFormState> {
	const formValues = {
		email: formData.get('email'),
		password: formData.get('password'),
	};

	const validatedFields = SignInSchema.safeParse(formValues);

	if (!validatedFields.success) {
		return {
			success: false,
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Erreur connexion, veuillez vérifier vos identifiants.',
		};
	}

	const existingUser = await prisma.user.findUnique({ where: { 'email': validatedFields.data.email.toLowerCase() } });

	if(!existingUser) {
		return {
			message: 'Incorrect email or password',
			success: false
		};
	}

	const validPassword = await new Argon2id().verify(existingUser.password, validatedFields.data.password);
	if(!validPassword) {
		return {
			message: 'Incorrect email or password',
			success: false
		};
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

	return redirect('/dashboard');
};

export const signOut = async () => {
	let authCookie = cookies().get('auth_session');

	const { session } = await validateRequest();
	if (!session) {
		return {
			success: false,
			message: 'No session found'
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	authCookie = cookies().get('auth_session');

	//TODO: fix redirection
	if(authCookie?.value === ''){
		redirect('/login');
	}
};
