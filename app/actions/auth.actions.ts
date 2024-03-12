// 'use server';

import { ActionResult, SignUpSchema } from '../types';

export type State = {
    errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
    };
    message?: string | null;
};

export async function signUp (state: State, formData: FormData): Promise<State> {
	const formValues = {
		email: formData.get('email'),
		password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword')
	};
	const validatedFields = SignUpSchema.safeParse(formValues);

	if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

	const { customerId, amount, status } = validatedFields.data;
    console.log("🚀 ~ signUp ~ validatedFields.data:", validatedFields.data)
 
	return { message: 'Erreur' };
};

export async function signIn (_: any, formData: FormData): Promise<ActionResult> {
	console.log('🚀 ~ signUp ~ formData:', formData);

    
	// const response = await fetch('/api/auth/signup', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify(formValues)
	// });

	// return response.json();
	return { error: 'Erreur' };
};