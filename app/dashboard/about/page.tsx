import { AboutMeForm } from '@/components';

export default function Page() {

	return (
		<div>
			<h2 className="text-start text-white">Ma présentation</h2>
			<div className="mt-32 flex justify-center">
				<AboutMeForm />
			</div>
		</div>
	);
}