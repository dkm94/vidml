'use client';

import React, { useState } from 'react';
import { CustomFormInput } from '..';
import { signUp } from '@/app/actions/auth.actions';
import { useFormState } from 'react-dom';

const RegisterForm = () => {
	const [ email, setEmail ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');
	const [ confirmPassword, setConfirmPassword ] = useState<string>('');

	const initialState = {
		message: null,
		errors: {} 
	};
	const updateInvoiceWithId = signUp.bind(null, {
		email,
		password,
		confirmPassword
	});
	const [ state, dispatch ] = useFormState(updateInvoiceWithId, initialState);

	return (
		<form action={dispatch} className="network-form w-full max-w-[34rem] flex flex-col gap-4">
			<CustomFormInput 
				name={'email'} 
				type={'text'} 
				label={'Email'} 
				id={'settings-email'} 
				onChange={e => setEmail(e?.target?.value)} />
			<div id="customer-error" aria-live="polite" aria-atomic="true">
				{state.errors.email && <div className="text-red-500">{state.errors.email}</div>}
			</div>
			<CustomFormInput
				name={'password'}
				type={'password'}
				label={'Mot de passe'}
				id={'settings-current-pwd'}
				onChange={e => setPassword(e?.target?.value)} />
			<div id="customer-error" aria-live="polite" aria-atomic="true">
				{state.errors.passord && <div className="text-red-500">{state.errors.email}</div>}
			</div>
			<CustomFormInput 
				name='confirm-pwd' 
				type={'password'} 
				label={'Confirmer le mot de passe'} 
				id={'settings-confirm-pwd'} 
				onChange={e => setConfirmPassword(e?.target?.value)} />
			<div className="mb-3 flex flex-col">
				<button type='submit' className="btn btn-primary self-end bg-zinc-700 text-slate-50  border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 uppercase">Créer un compte</button>
			</div>
		</form>
	);
};

export default RegisterForm;