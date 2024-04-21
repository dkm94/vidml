import './layout/MobileNavbar/MobileNavbar.css';
import { inter } from '@/app/fonts';

import Link from 'next/link';

import { NavLinkProps } from '@/types';

const Navlink = ({ id, title, path, setShowLinks }: NavLinkProps) => {

	return (
		<li key={id} className={'navbar__item block lg:translate-y-0 slideDown-1'}>
			<Link
				className={`${ inter.className } px-[5px] text-gray-50 lg:text-slate-900 no-underline block p-4 bg-inherit uppercase text-base lg:text-sm font-semibold`}
				href={path}
				onClick={setShowLinks}
			>
				{title}
			</Link>
		</li>
	);
};

export default Navlink;