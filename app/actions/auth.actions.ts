'use server';

import { generateId } from 'lucia';
import prisma from '../lib/prisma';
import { ActionResult, SignUpSchema, SignUpState } from '../types';
import { Argon2id } from "oslo/password";
import { lucia } from '../lib/auth';
import { cookies } from 'next/headers';
import { formatExpiredAt } from '../lib/utils';

export type State = {
    errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
    };
    message?: string | null;
};

export async function signUp (state: SignUpState, formData: FormData): Promise<SignUpState> {
	const PASSWORD_LENGTH_MAX = 50;
	const PASSWORD_LENGTH_MIN = 8;
	const rawPassword = formData.get('password') as string;
	
	if(rawPassword.length > PASSWORD_LENGTH_MAX || rawPassword.length < PASSWORD_LENGTH_MIN){
		return {
			success: false,
			errors: {
				password: [`Password should be a min of ${PASSWORD_LENGTH_MIN} characters and shouldn't exceed the limit of ${PASSWORD_LENGTH_MAX} characters`]
			}
		}
	}
	
	const formValues = {
		email: formData.get('email'),
		password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword'),
	};

	const userId = generateId(15)
	const validatedFields = SignUpSchema.safeParse(formValues);

	if (!validatedFields.success) {
        return {
			success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Account.',
        };
    }
	
	const hashedPassword = await new Argon2id().hash(rawPassword)
	if(hashedPassword){
		validatedFields.data.password = hashedPassword
	}

	const { email, password } = validatedFields.data;

	try {
		await prisma.user.create({
			data: {
				id: userId,
				email,
				password,
			}
		});
		
		const session = await lucia.createSession(userId, {
			expiresAt: formatExpiredAt(60 * 60 * 24 * 30),
			id: generateId(18),
			userId
		})
		const sessionCookie = lucia.createSessionCookie(session.id)
	
		cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
		)

		return {
			message: 'Account created successfully',
			success: true,
			data: {
				userId
			}
		}
	} catch (error: any) {
		return {
			message: "Oups, la création du compte a échoué. Veuillez réessayer plus tard.",
			success: false,
		}
	}
};

export async function signIn (_: any, formData: FormData): Promise<ActionResult> {
	console.log('🚀 ~ signUp ~ formData:', formData);
	return { error: 'Erreur' };
};