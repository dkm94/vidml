import './layout/MobileNavbar/MobileNavbar.css';
import { NavLinkProps } from '@/types';
import Link from 'next/link';

const Navlink = ({ key, title, path, setShowLinks, showLinks }: NavLinkProps) => {
	return (
		<li key={key} className="navbar__item block lg:translate-y-0 slideDown-1">
			<Link
				className="px-[5px] text-gray-50 lg:text-slate-900 no-underline block p-4 bg-inherit uppercase text-base lg:text-sm"
				href={path}
				onClick={() => setShowLinks(!showLinks)}
			>
				{title}
			</Link>
		</li>
	);
};

export default Navlink;