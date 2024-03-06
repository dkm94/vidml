'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';


const links = [
	{
		name: 'Retour au site',
		href: '/',
	},
	{
		name: 'Mes illustrations',
		href: '/dashboard/illustrations',
	},
	{
		name: 'Mes services',
		href: '/dashboard/services',
	},
	{
		name: 'Ma présentation',
		href: '/dashboard/about',
	},
	{
		name: 'Mes réseaux',
		href: '/dashboard/network',
	},
	{
		name: 'Mes comptes',
		href: '/dashboard/accounts',
	},
	{
		name: 'Paramètres',
		href: '/dashboard/settings',
	},
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#f2eee6]  md:flex-none md:justify-start md:p-2 md:px-3',
							{ 'bg-[#f7e0b7]': pathname === link.href, },
						  )}
					>
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
