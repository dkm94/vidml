import { LoginForm, RegisterForm } from '@/components';
import React from 'react';

export default function Page() {
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