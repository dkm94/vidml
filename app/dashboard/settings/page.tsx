import { SettingsForm } from '@/components';

export default function Page() {
	return (
		<div>
			<h2 className="text-start text-white">Paramètres</h2>
			<div className="mt-32 flex justify-center">
				<SettingsForm />
			</div>
		</div>
	);
}