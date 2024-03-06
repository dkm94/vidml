import Link from 'next/link';
import Image from 'next/image';

import NavLinks from '../dashboard/nav-links';

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<Link
				className="mb-2 flex h-20 items-end justify-end rounded-md logo-linear-bg p-4 md:h-40"
				href="/"
			>
				<div className="text-white">
          Tableau de bord
				</div>
			</Link>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<div className="hidden h-auto w-full grow bg-gray-50 md:block"></div>
				<form>
					<button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
						{/* <PowerIcon className="w-6" /> */}
						<Image src={'/assets/power.png'} width={32} height={32} alt='déconnexion' />
						<div className="hidden md:block">Déconnexion</div>
					</button>
				</form>
			</div>
		</div>
	);
}
