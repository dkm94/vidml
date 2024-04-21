/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { inter } from '@/app/fonts';

import React, { FormEvent, useState } from 'react';
import { ContactFormInput, ContactFormTextArea, SubmitButton } from '..';

const ContactForm = () => {
	const [ name, setName ] = useState<string>('');
	const [ email, setEmail ] = useState<string>('');
	const [ subject, setSubject ] = useState<string>('');
	const [ content, setContent ] = useState<string>('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(name, email, subject, content);
	};

	return (
		<div className='flex justify-center mt-20'>
			<form onSubmit={handleSubmit} className={`${ inter.className } flex flex-col w-full max-w-2xl bg-[#8B8B8B] py-12 px-10 gap-6`}>
				<div className='flex flex-col gap-6'>
					<ContactFormInput label='Name' type='text' name="name" onChange={(e) => setName(e.target.value)} />
					<ContactFormInput label='Email' type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
					<ContactFormInput label='Subject' type="text" name="subject" onChange={(e) => setSubject(e.target.value)} />
					<ContactFormTextArea label='Message' name='content' onChange={(e) => setContent(e.target?.value)} />
				</div>
				<div className='flex justify-end'>
					<SubmitButton className={''} text={'Envoyer'} type={'submit'} />
				</div>
			</form>
		</div>
	);
};

export default ContactForm;