'use client';

import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Divider, IconButton } from '@mui/material';

import Page from '@/app/page';
import { Footer, MobileNavbar } from '.';
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';

import { WindowWidthContext } from './ThirdPartiesWrapper';
import { useWindowWidth } from '@/utils';

interface AppProps extends React.PropsWithChildren {
    children: React.ReactNode;
}

const App: FC<AppProps> = (props) => {
	const { children } = props;

	const pathname: string = usePathname();
	const { getWindowWidth } = useWindowWidth();

	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;
	const isTablet = windowWidthContext?.isTablet ?? false;
	const width = windowWidthContext?.width ?? 0;

	const isNotDesktop = isMobile || isTablet;
	const isDashboardPage = pathname.startsWith('/dashboard');
	const isHomePage = pathname === '/';

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

	const handleToggleMute = () => {
		setIsMuted(!isMuted);
	};

	return (
		<div className='app'>
			{ isNotDesktop && (
				<div className='audio-content'>
					<audio ref={audioRef} src={'/assets/music_theme/Soon.mp3'} loop />
				</div>
			)}
			{ isNotDesktop && <MobileNavbar path={pathname} windowWidth={width} />}
			<div className={ isNotDesktop ? 'relative z-[1]' : 'flex flex-row'}>
				{ width > 815 && !isDashboardPage && <DesktopNavbar path={pathname} />}
				{ pathname === '/' && <Page /> }
				{ pathname !== '/' && <div onLoad={getWindowWidth} className='min-h-[100vh] bg-[#09080B] w-full'>{children}</div>}
			</div>
			{ isMobile && <Divider className='h-2 bg-white min-[815px]:h-[1px]'/>}
			{ isMobile && <Footer />}
		</div>
	);
};

export default App;