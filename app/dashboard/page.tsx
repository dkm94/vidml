import { redirect } from 'next/navigation';
import { validateRequest } from '../lib/auth';

export default async function Page() {
	const { user } = await validateRequest();

	if(!user) redirect('/login');
	
	return <h2 className="text-start text-white">Dashboard Page</h2>;
}