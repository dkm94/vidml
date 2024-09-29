import './layout/MobileNavbar/MobileNavbar.css';
import { inter } from '@/app/fonts';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavLinkProps } from '@/types';

const Navlink = ({ id, title, path, setShowLinks }: NavLinkProps) => {
	const currentPath = usePathname();

	return (
		<li key={id} className={'navbar__item navlink block lg:translate-y-0 slideDown-1'}>
			<Link
				className={`${ inter.className } ${ currentPath === path ? 'font-black active-link' : 'font-light' } px-[5px] text-gray-50 lg:text-slate-900 no-underline block p-4 bg-inherit uppercase text-sm focus:outline-none active:bg-transparent`}
				href={path}
				onClick={setShowLinks}
			>
				{title}
			</Link>
		</li>
	);
};

export default Navlink;