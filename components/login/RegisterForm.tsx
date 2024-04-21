'use client';

import React from 'react';
import { CustomFormInput } from '..';
import { signUp } from '@/app/actions/auth.actions';
import { useFormState } from 'react-dom';
import { SignFormState } from '@/app/types';

const RegisterForm = () => {
	const initialState = {
		message: null,
		errors: {},
		success: false,
	};
	const [ state, dispatch ] = useFormState<SignFormState, FormData>(signUp, initialState);

	return (
		<form action={dispatch} className="network-form w-full max-w-[34rem] flex flex-col gap-4">
			<CustomFormInput 
				ariaDescribedby='register-email-error'
				name={'email'} 
				type={'text'} 
				label={'Email'} 
				id={'register-email'} 
			/>
			<div id="register-email-error" aria-live="polite" aria-atomic="true">
				{state.errors?.email && state.errors.email.map((error: string) => (
					<p className="mt-2 text-sm text-red-500" key={error}>
						{error}
					</p>
				))}
			</div>
			<CustomFormInput
				ariaDescribedby='register-password-error'
				name={'password'}
				type={'password'}
				label={'Mot de passe'}
				id={'register-pwd'}
			/>
			<div id="register-password-error" aria-live="polite" aria-atomic="true">
				{state.errors?.password && state.errors.password.map((error: string) => (
					<p className="mt-2 text-sm text-red-500" key={error}>
						{error}
					</p>
				))}
			</div>
			<CustomFormInput 
				ariaDescribedby='register-confirm-pwd-error'
				name='confirmPassword' 
				type={'password'} 
				label={'Confirmer le mot de passe'} 
				id={'register-confirm-pwd'} 
			/>
			<div id="confirm-pwd-error" aria-live="polite" aria-atomic="true">
				{state.errors?.confirmPassword && state.errors.confirmPassword.map((error: string) => (
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
				<button type='submit' className="btn btn-primary self-end bg-zinc-700 text-slate-50  border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 uppercase">Créer un compte</button>
			</div>
		</form>
	);
};

export default RegisterForm;