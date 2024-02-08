import React, { FC, ReactNode, useContext } from 'react';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { DesktopNavbarProps, NavLink } from '@/types';
import { Logo } from '@/components';
import { SocialButton } from '@/components/buttons';
import { navlinks } from '@/constants';
import { inter } from '@/app/fonts';
import { WindowWidthContext } from '@/app/layout';
import { usePathname } from 'next/navigation';

const DesktopNavbar: FC<DesktopNavbarProps> = ({ handleShowLinks, showLinks, path }) => {
	const pathname = usePathname();
	const windowWidthContext = useContext(WindowWidthContext);
	// debugger;
	const isMobile = windowWidthContext?.isMobile ?? false;

	return (
		<div className={'sticky top-0 w-[30%] min-w-[200px] max-w-[350px] z-[100] bg-[#09080B] border-white border-solid border-r-[0.5px] h-[100vh]'}>
			<div className={`${ isMobile ? 'absolute' : 'relative' } h-full text-white flex flex-col justify-center`}>
				<Logo background="bg-white" height='h-fit' width="w-full" />
				<ul className="flex flex-col p-8 gap-y-4">
					{navlinks.map((link: NavLink, index: number): ReactNode => {
						return <Link className={`nav-link w-[100px] text-white uppercase text-base 2xl:text-xs ${ inter.className } ${ pathname === link.path && 'font-black' }`} key={index} href={link.path} >{link.title}</Link>;
					})}
				</ul>
				<div className='absolute bottom-40 p-8 w-full flex flex-row gap-4'>
					<SocialButton path='https://www.instagram.com/vidml.illustration/' icon={<InstagramIcon />} />
					<SocialButton path='mailto:vidml@gmail.com' icon={<MailOutlineIcon />} />
				</div>
				<div className='absolute bottom-0 right-0 pr-6 pb-4'>
					<span>Copyright © 2023 </span>
					<a className='font-semibold' target="_blank" href="https://github.com/dkm94">DKM</a>
				</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;