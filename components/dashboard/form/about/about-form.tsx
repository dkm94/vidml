'use client';

import React, { useState } from 'react';
import CustomFormInput from '../custom-input';
import CustomFormTextarea from '../custom-textarea';

const AboutMeForm = () => {
	const [ title, setTitle ] = useState<string>('');
	const [ subtitle, setSubtitle ] = useState<string>('');
	const [ aboutMe, setAboutMe ] = useState<string>('');

	const handleSubmit = (form: FormData) => {
		console.log('🚀 ~ handleSubmit ~ form:', form);
		console.log(title, subtitle, aboutMe);
	};
    
	return (
		<form action={handleSubmit} className="w-full max-w-[34rem] flex flex-col gap-4">
			<CustomFormInput name={'title'} type={'text'} label={'Titre'} id={'title'} placeholder={'Titre, citation...'} onChange={e => setTitle(e?.target?.value)} />
			<CustomFormInput name={'subtitle'} type={'text'} label={'Sous-titre'} id={'subtitle'} placeholder={'Sous-titre, auteur de la citation...'} onChange={e => setSubtitle(e?.target?.value)} />
			<CustomFormTextarea label={'Texte de présentation'} id={'about-me'} onChange={e => setAboutMe((e.target as HTMLTextAreaElement).value)} />

			<div className="mb-3 flex flex-col">
				<button className="btn btn-primary self-start border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 bg-slate-200">Choisir une photo</button>
			</div>
			<div className="mb-3 flex flex-col">
				<button type='submit' className="btn btn-primary self-end bg-zinc-700 text-slate-50  border-solid border-slate-50 border-2 rounded w-fit px-3 py-1 uppercase">Enregistrer</button>
			</div>
		</form>
	);
};

export default AboutMeForm;