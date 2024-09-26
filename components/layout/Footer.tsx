'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { AudioButton, SocialButton } from '../buttons';

import { WindowWidthContext } from './ThirdPartiesWrapper';

const Footer = () => {
	const pathname = usePathname();
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

	const handleToggleMute = () => {
		setIsMuted(!isMuted);
	};


	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;
	const isTablet = windowWidthContext?.isTablet ?? false;
	const isNotLarge = isMobile || isTablet;
	
	return (
		<footer className='footer flex justify-center'>
			<div className='audio-content'>
				<audio ref={audioRef} src={'/assets/music_theme/Soon.mp3'} loop />
			</div>
			<div className='sm:flex flex-col sm:flex-row sm:relative pl-12 pr-12 max-w-[1170px] w-full mt-2 mb-2'>
				{isNotLarge && <div className='text-center text-red-50 py-4 flex flex-col sm:flex-row gap-4'>
					{/* <span className='uppercase text-nowrap md:self-center text-xs self-center'>contact</span> */}
					{/* <div className='flex justify-center sm:hidden'><hr className='bg-orange-50 w-[105px]' /></div> */}
					<div className='flex flex-wrap gap-2 justify-center w-full'>
						<SocialButton path='https://www.instagram.com/vidml.illustration/' icon={<InstagramIcon />} />
						<SocialButton path='mailto:vidml@gmail.com' icon={<MailOutlineIcon />} />
						{pathname === '/' && <AudioButton isMuted={isMuted} handleToggleMute={handleToggleMute} />}
					</div>
				</div>}
			
				<div className='text-center self-center text-red-50 pb-4 sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2'>
					<span className='text-xs font-light'>Copyright © 2024 </span>
					<span className='text-xs font-light'>Designed by </span><span className='text-xs font-semibold'>DKM</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;