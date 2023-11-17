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
	const [ width, setWidth ] = React.useState<number>(0);
	const [ showLinks, setShowLinks ] = useState<boolean>(false);
	const [ pace, setPace ] = useState<number>(500);
	const [ hidden, setHidden ] = useState<string>('');

	const isMobile: boolean | undefined = width < 500;
	const isTablet: boolean | undefined = width > 500 && width < 815;
	const isDesktop: boolean | undefined = width > 815 && width < 1024;
	const isLarge: boolean | undefined = width > 1024;
	const isNotLarge: boolean | undefined = width < 815;

	const handleShowLinks = (): void => {
		setShowLinks(!showLinks);
		setPace(showLinks ? 500 : 350);
		setTimeout(() => {
			setHidden(showLinks ? '' : 'hidden');
		}, pace);
	};

	const getWindowWidth = () => {
		const w = window.outerWidth;
		setWidth(w);
	};

	useEffect(() => {
		getWindowWidth();
		window.addEventListener('resize', getWindowWidth);
		return () => {
			window.removeEventListener('resize', getWindowWidth);
		};
		
	}, []);

	return (
		<html lang="fr" className={`${ cardo.variable } ${ inria.variable } ${ bebasNeue.variable }`}>
			<body>
				<ThemeRegistry options={{ key: 'mui' }}>
					<WindowWidthContext.Provider value={{
						isMobile,
						isTablet,
						isDesktop,
						isLarge,
						isNotLarge
					}}>
						{isNotLarge && <MobileNavbar handleShowLinks={handleShowLinks} showLinks={showLinks} path={pathname} windowWidth={width} />}
						<div className={isNotLarge ? 'relative' : 'flex flex-row'}>
							{width > 815 && <DesktopNavbar handleShowLinks={handleShowLinks} showLinks={showLinks} path={pathname} />}
							{ pathname === '/' && <Home handleClick={handleShowLinks} hidden={hidden} /> }
							{ pathname !== '/' && children }
						</div>
						{isNotLarge && <Footer />}
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