import { LoginForm } from '@/components';
import React from 'react';

const LoginPage = () => {
	return (
		<div>
			<h2 className='text-white mt-5'>Créer mon compte</h2>
			<div className="mt-32 flex justify-center">
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;