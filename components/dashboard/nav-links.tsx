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
	return (
		<>
			{links.map((link) => {
				return (
					<a
						key={link.name}
						href={link.href}
						className="flex h-[48px] grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
					>
						<p className="hidden md:block">{link.name}</p>
					</a>
				);
			})}
		</>
	);
}
