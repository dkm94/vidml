'use client';

import React, { FC } from 'react';

import { SubmitButton } from '..';

const NotFound:FC = () => {
	return (
		<div className='text-slate-100 min-[815px]:px-16 flex flex-col gap-5'>
			<h2 className='text-6xl'>404</h2>
			<div className='flex flex-col'>
				<h3 className='text-balance'>{'La page que vous cherchez n\'existe pas'}</h3>
			</div>
			<SubmitButton 
				className="bg-slate-200 text-gray-950 w-fit place-self-center mt-8" 
				text="Retour" 
				type="button"
				onClick={() => window.location.href = '/illustrations'}
			/>
		</div>
	);
};

export default NotFound;
