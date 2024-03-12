'use client';

import React, { useState } from 'react';
import { CustomFormInput } from '..';
// import { signIn } from '@/app/actions/auth.actions';

const LoginForm = () => {
	const [ email, setEmail ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// signUp({
		// 	email,
		// 	password,
		// });
		console.log(email, password);
	};

	return (
		<form onSubmit={handleSubmit} className="network-form w-full max-w-[34rem] flex flex-col gap-4">
			<CustomFormInput 
				name={'email'} 
				type={'text'} 
				label={'Email'} 
				id={'login-email'} 
				onChange={e => setEmail(e?.target?.value)} />
			<CustomFormInput
				name={'password'}
				type={'password'}
				label={'Mot de passe'}
				id={'login-current-pwd'}
				onChange={e => setPassword(e?.target?.value)} />
			
			<div className="mb-3 flex flex-col">
				<button type='submit' className="btn btn-primary self-end bg-zinc-700 text-slate-50  border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 uppercase">Se connecter</button>
			</div>
		</form>
	);
};

export default LoginForm;