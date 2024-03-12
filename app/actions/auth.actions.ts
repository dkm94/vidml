// 'use server';

import { ActionResult } from '../types';

export async function signUp (_: any, formData: FormData): Promise<ActionResult> {
	console.log('🚀 ~ signUp ~ formData:', formData);

    
	// const response = await fetch('/api/auth/signup', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify(formValues)
	// });

	// return response.json();
	return { error: 'Erreur' };
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