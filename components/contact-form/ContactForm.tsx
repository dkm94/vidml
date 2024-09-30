/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { inter } from '@/app/fonts';

import React, { FormEvent, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ContactFormInput, ContactFormTextArea, SubmitButton } from '..';

const ContactForm = () => {
	const form: any = useRef();

	const [ message, setMessage ] = useState<string>('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm(`${ process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID }`, `${ process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID }` , form.current, { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, })
		  .then(
				() => {
					setMessage('Votre mail a été envoyé.');
					setTimeout(() => {
						setMessage('');
					}, 5000);
				},
				(error) => {
					setMessage('Oups, l\'envoi de votre mail a échoué. Contactez-moi par mail vidml@gmail.com');
					console.log(error);
					setTimeout(() => {
						setMessage('');
					}, 5000);
				},
		  );
	};

	return (
		<div className='flex justify-center mt-20 w-full'>
			<form ref={form} onSubmit={handleSubmit} className={`${ inter.className } flex flex-col w-full max-w-2xl bg-[#8B8B8B] py-12 px-10 gap-6 border border-solid border-gray-50`}>
				<div className='flex flex-col gap-6 text-xs'>
					<ContactFormInput label='Nom' type='text' name="name" />
					<ContactFormInput label='Email' type="text" name="email" />
					<ContactFormInput label='Objet' type="text" name="subject" />
					<ContactFormTextArea label='Message' name='content' />
				</div>
				<div className='flex justify-end'>
					<SubmitButton className="border-black border-solid border-[1px] text-xs" text={'Envoyer'} type={'submit'} />
				</div>
				<span className='text-slate-200 text-center text-xs'>{message}</span>
			</form>
		</div>
	);
};

export default ContactForm;