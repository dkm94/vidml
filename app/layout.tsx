'use client';

import './globals.css';

import React, { FunctionComponent, createContext, useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { bebasNeue, cardo, inria } from './fonts';

import { IWindowWidthContextProps, LayoutProps } from '@/types';
import { Footer, MobileNavbar } from '@/components/layout';
import ThemeRegistry from '../theme/ThemeRegistry';
import Home from './page';
import DesktopNavbar from '@/components/layout/DesktopNavbar/DesktopNavbar';

export const metadata: Metadata = {
	title: 'ViDML | Gallery',
	description: 'Portfolio of ViDML',
};

export const WindowWidthContext = createContext<IWindowWidthContextProps | null>(null);

export const RootLayout: FunctionComponent<LayoutProps> = ( props: LayoutProps ) => {
	
	const { children } = props;

	const pathname: string = usePathname();
	const [ width, setWidth ] = useState<number>(window.outerWidth);
	const [ showLinks, setShowLinks ] = useState<boolean>(false);

	const isMobile: boolean = width < 500;
	const isTablet: boolean = width > 500 && width < 815;
	const isDesktop: boolean = width > 815 && width < 1024;
	const isLarge: boolean = width > 1024;

	const isNotDesktop = isMobile || isTablet;

	const handleShowLinks = (): void => setShowLinks(!showLinks);

	const getWindowWidth = () => {
		const w = window.outerWidth;
		if(typeof w !== 'undefined'){
			setWidth(w);
		}
	};

	useEffect(() => {
		getWindowWidth();
		window.addEventListener('resize', getWindowWidth);
		return () => {
			window.removeEventListener('resize', getWindowWidth);
		};
	}, []);

	return (
		<html lang="fr" className={`${ cardo.variable } ${ inria.variable } ${ bebasNeue.variable }`} suppressHydrationWarning={true}>
			<body className={width > 815 ? 'min-h-[100vh]' : ''}>
				<ThemeRegistry options={{ key: 'mui' }}>
					<WindowWidthContext.Provider value={{
						isMobile,
						isTablet,
						isDesktop,
						isLarge,
					}}>
						{isNotDesktop && <MobileNavbar handleShowLinks={handleShowLinks} showLinks={showLinks} path={pathname} windowWidth={width} />}
						<div className={isMobile || isTablet ? 'relative' : 'flex flex-row'}>
							{width > 815 && <DesktopNavbar handleShowLinks={handleShowLinks} showLinks={showLinks} path={pathname} />}
							{ pathname === '/' && <Home handleClick={handleShowLinks} /> }
							{ pathname !== '/' && <div className='min-h-[100vh] bg-[#09080B] w-full'>{children}</div>}
						</div>
						{isMobile && <Footer />}
					</WindowWidthContext.Provider>
				</ThemeRegistry>
				<script
					type="text/javascript"
					src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" async />
			</body>
		</html>
	);
};
export default RootLayout;