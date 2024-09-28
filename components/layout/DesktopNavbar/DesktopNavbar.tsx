import React, { FC, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { Logo } from '@/components';
import { AudioButton, PulseButton, SocialButton } from '@/components/buttons';

import { DesktopNavbarProps, NavLink } from '@/types';
import { navlinks } from '@/constants';
import { inter } from '@/app/fonts';
import { WindowWidthContext } from '../ThirdPartiesWrapper';

const DesktopNavbar: FC<DesktopNavbarProps> = () => {
	const pathname = usePathname();

	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;

	const [ isMuted, setIsMuted ] = useState(true);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.muted = isMuted;
			if (!isMuted) {
				audioRef.current.play().catch((error: any) => {
					console.error('La lecture automatique de l’audio a été empêchée', error);
				});
			}
		}
	}, [ isMuted ]);

	useEffect(() => {
		if (pathname !== '/' && audioRef.current) {
			setIsMuted(true);
			audioRef.current.currentTime = 0; // Réinitialise l'audio
			audioRef.current.pause(); // Stoppe l'audio	
		}
	}, [ pathname ]);

	function setActiveLink(staticLink: string){
		if(staticLink === '/'){
			return pathname === staticLink;
		} else {
			return pathname.startsWith(staticLink);
		}
	}

	const handleToggleMute = () => {
		setIsMuted(!isMuted);
	};
	
	return (
		<div className={'sticky top-0 w-[30%] min-w-[200px] max-w-[350px] z-[100] bg-[#09080B] border-white border-solid border-r-[0.5px] h-[100vh]'}>
			<div className={`${ isMobile ? 'absolute justify-center' : 'max-h-[1200px]' } overflow-y-auto h-full text-white flex flex-col`}>
				<div className='audio-content'>
					<audio ref={audioRef} src={'/assets/music_theme/Soon.mp3'} loop />

					{/* <div className="absolute top-0 right-0 bg-white/20 hover:bg-white/50 z-[100] flex justify-center">
						
					</div> */}
				</div>
				<Logo background="bg-white" height='h-fit' width="w-full" />
				<ul className="flex flex-col p-8 gap-y-4 mt-auto">
					{navlinks.map((link: NavLink, index: number): ReactNode => {
						return <Link className={`nav-link w-[100px] text-white uppercase text-base 2xl:text-xs ${ inter.className } ${ setActiveLink(link.path) && 'font-black' }`} key={index} href={link.path} >{link.title}</Link>;
					})}
				</ul>
				<div className='mt-auto'>
					<div className='p-8 w-full flex flex-row gap-4 justify-end'>
						<SocialButton path='https://www.instagram.com/vidml.illustration/' icon={<InstagramIcon />} />
						<SocialButton path='mailto:vidmlillustration@gmail.com' icon={<MailOutlineIcon />} />
						{/* {pathname === '/' && <AudioButton isMuted={isMuted} handleToggleMute={handleToggleMute} />} */}
						{pathname === '/' && <PulseButton isMuted={isMuted} handleToggleMute={handleToggleMute} />}
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