import { LoginForm, RegisterForm } from '@/components';
import React from 'react';
import { validateRequest } from '../lib/auth';
import { redirect } from 'next/navigation';

export default async function  Page() {
	const res = await validateRequest();
	// 🚀 ~ Page ~ res: {
	// 	user: { username: 'user@nextmail.com', id: 'r2odpz8qvv1v0rr' },
	// 	session: {
	// 	  id: 'jnf73ac3a68sd4g6gq6zvvkozbemq3o9lgccysb1',
	// 	  userId: 'r2odpz8qvv1v0rr',
	// 	  fresh: false,
	// 	  expiresAt: 2024-04-12T19:16:38.536Z
	// 	}
	//   }
	if (res.user) {
		redirect('/dashboard');
	}
	
	return (
		<div>
			<h2 className='text-white mt-5'>Sign up/ Sign in</h2>
			<div className="mt-32 justify-center flex flex-col gap-8 items-center">
				<LoginForm />
				<RegisterForm />
			</div>
		</div>
	);
};