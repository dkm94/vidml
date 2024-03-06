'use client';

import React, { ChangeEvent, useState } from 'react';
import CustomFormInput from './custom-input';

const NetworkForm = () => {
	const [ instagramAccount, setInstagramAccount ] = useState<string>('');
	const [ email, setEmail ] = useState<string>('');

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(instagramAccount, email);
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-[34rem] flex flex-col gap-4">
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
		</form>
	);
};

export default NetworkForm;