import React, { FC, ReactNode, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { Logo } from '@/components';
import { SocialButton } from '@/components/buttons';

import { DesktopNavbarProps, NavLink } from '@/types';
import { navlinks } from '@/constants';
import { inter } from '@/app/fonts';
import { WindowWidthContext } from '../ThirdPartiesWrapper';

const DesktopNavbar: FC<DesktopNavbarProps> = () => {
	const pathname = usePathname();

	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;

	function setActiveLink(staticLink: string){
		if(staticLink === '/'){
			return pathname === staticLink;
		} else {
			return pathname.startsWith(staticLink);
		}
	}
	
	return (
		<div className={'sticky top-0 w-[30%] min-w-[200px] max-w-[350px] z-[100] bg-[#09080B] border-white border-solid border-r-[0.5px] h-[100vh]'}>
			<div className={`${ isMobile ? 'absolute justify-center' : 'max-h-[1200px]' } overflow-y-auto h-full text-white flex flex-col`}>
				<Logo background="bg-white" height='h-fit' width="w-full" />
				<ul className="flex flex-col p-8 gap-y-4 mt-auto">
					{navlinks.map((link: NavLink, index: number): ReactNode => {
						return <Link className={`nav-link w-[100px] text-white uppercase text-base 2xl:text-xs ${ inter.className } ${ setActiveLink(link.path) && 'font-black' }`} key={index} href={link.path} >{link.title}</Link>;
					})}
				</ul>
				<div className='mt-auto'>
					<div className='p-8 w-full flex flex-row gap-4 justify-end'>
						<SocialButton path='https://www.instagram.com/vidml.illustration/' icon={<InstagramIcon />} />
						<SocialButton path='mailto:vidml@gmail.com' icon={<MailOutlineIcon />} />
					</div>
					<div className='pr-6 pb-4 text-end'>
						<span className='text-xs font-light'>Copyright © 2024 </span>
						<span className='text-xs font-light'>Designed by </span>
						<span className='text-xs font-semibold'>DKM</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;