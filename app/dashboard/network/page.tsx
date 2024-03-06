import { NetworkForm } from '@/components';

export default function Page() {

	return (
		<div className='network-form-ctn'>
			<h2 className="text-start text-white">Mes réseaux sociaux</h2>
			<div className="mt-32 flex justify-center">
				<NetworkForm />
			</div>
		</div>
	);
}