import './layout/MobileNavbar/MobileNavbar.css';
import { NavLinkProps } from '@/types';
import Link from 'next/link';

const Navlink = ({ id, title, path, setShowLinks }: NavLinkProps) => {
	return (
		<li key={id} className={'navbar__item block lg:translate-y-0 slideDown-1'}>
			<Link
				className={'navlink-a px-[5px] text-gray-50 lg:text-slate-900 no-underline block p-4 bg-inherit uppercase text-base lg:text-sm font-semibold'}
				href={path}
				onClick={setShowLinks}
			>
				{title}
			</Link>
		</li>
	);
};

export default Navlink;