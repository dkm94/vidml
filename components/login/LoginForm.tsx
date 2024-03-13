'use client';

import React from 'react';
import { CustomFormInput } from '..';
import { useFormState } from 'react-dom';
import { SignFormState } from '@/app/types';
import { signIn } from '@/app/actions/auth.actions';
import { validateRequest } from '@/app/lib/auth';

const LoginForm = () => {
	const initialState = {
		message: null,
		errors: {},
		success: false,
	};
	const [ state, dispatch ] = useFormState<SignFormState, FormData>(signIn, initialState);

	return (
		<form action={dispatch} className="network-form w-full max-w-[34rem] flex flex-col gap-4">
			<CustomFormInput 
				ariaDescribedby='login-email-error'
				name={'email'} 
				type={'text'} 
				label={'Email'} 
				id={'login-email'} 
				/>
			<div id="login-email-error" aria-live="polite" aria-atomic="true">
			{state.errors?.email && state.errors.email.map((error: string) => (
			<p className="mt-2 text-sm text-red-500" key={error}>
			{error}
			</p>
			))}
			</div>
			<CustomFormInput
				ariaDescribedby='login-password-error'
				name={'password'}
				type={'password'}
				label={'Mot de passe'}
				id={'login-pwd'}
				/>
			<div id="login-password-error" aria-live="polite" aria-atomic="true">
				{state.errors?.password && state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
				{error}
                </p>
			))}
			</div>
			<div>
				{
				state.success ? 
				<p className="mt-2 text-sm text-green-500">{state.message}</p> : 
				<p className="mt-2 text-sm text-red-500">{state.message}</p>
				}
			</div>
			<div className="mb-3 flex flex-col">
				<button type='submit' className="btn btn-primary self-end bg-zinc-700 text-slate-50  border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 uppercase">Se connecter</button>
			</div>
		</form>
	);
};

export default LoginForm;