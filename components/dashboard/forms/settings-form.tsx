'use client';

import React, { ChangeEvent, useState } from 'react';
import CustomFormInput from '../../ui/dashboard/custom-input';

const SettingsForm = () => {
	const [ email, setEmail ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');
	const [ newPassword, setNewPassword ] = useState<string>('');
	const [ confirmPassword, setConfirmPassword ] = useState<string>('');

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email, password, newPassword, confirmPassword);
	};

	return (
		<form onSubmit={handleSubmit} className="network-form w-full max-w-[34rem] flex flex-col gap-4">
			<CustomFormInput 
				name={'email'} 
				type={'text'} 
				label={'Email'} 
				id={'settings-email'} 
				onChange={e => setEmail(e?.target?.value)} />
			<CustomFormInput
				name={'current-pwd'} 
				type={'password'} 
				label={'Mot de passe actuel'} 
				id={'settings-current-pwd'} 
				onChange={e => setPassword(e?.target?.value)} />
			<CustomFormInput 
				name={'new-pwd'} 
				type={'password'} 
				label={'Nouveau mot de passe'} 
				id={'settings-new-pwd'} 
				onChange={e => setNewPassword(e?.target?.value)} />
			<CustomFormInput 
				name={'confirm-pwd'} 
				type={'password'} 
				label={'Confirmer le mot de passe'} 
				id={'settings-confirm-pwd'} 
				onChange={e => setConfirmPassword(e?.target?.value)} />
			<div className="mb-3 flex flex-col">
				<button type='submit' className="btn btn-primary self-end bg-zinc-700 text-slate-50  border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 uppercase">Enregistrer</button>
			</div>
		</form>
	);
};

export default SettingsForm;