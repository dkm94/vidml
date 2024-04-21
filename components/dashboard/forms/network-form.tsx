'use client';

import React, { ChangeEvent, useState } from 'react';
import CustomFormInput from '../../ui/dashboard/custom-input';

const NetworkForm = () => {
	const [ instagramAccount, setInstagramAccount ] = useState<string>('');
	const [ email, setEmail ] = useState<string>('');

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(instagramAccount, email);
	};

	return (
		<form onSubmit={handleSubmit} className="network-form w-full max-w-[34rem] flex flex-col gap-4">
			<CustomFormInput 
				name={'network-instagram'} 
				type={'text'} 
				label={'Instagram'} 
				id={'network-instagram'} 
				placeholder={'https://www.instagram.com/mon_compte_instagram/'} 
				onChange={e => setInstagramAccount(e?.target?.value)} />
			<CustomFormInput 
				name={'network-mail'} 
				type={'text'} 
				label={'Email'} 
				id={'network-mail'} 
				placeholder={'nom@gmail.com'} 
				onChange={e => setEmail(e?.target?.value)} />
			<div className="mb-3 flex flex-col">
				<button type='submit' className="btn btn-primary self-end bg-zinc-700 text-slate-50  border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 uppercase">Enregistrer</button>
			</div>
		</form>
	);
};

export default NetworkForm;