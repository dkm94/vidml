'use client';

import './globals.css';

import React, { FunctionComponent, useState } from 'react';
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { bebasNeue, cardo, inria } from './fonts';

import { LayoutProps } from '@/types';
import { Footer, MobileNavbar } from '@/components/layout';
import ThemeRegistry from '../theme/ThemeRegistry';
import Home from './page';

export const metadata: Metadata = {
	title: 'ViDML | Gallery',
	description: 'Portfolio of ViDML',
};

export const RootLayout: FunctionComponent<LayoutProps> = ( props: LayoutProps ) => {

	const { children } = props;

	const pathname: string = usePathname();
	const [ showLinks, setShowLinks ] = useState<boolean>(false);
	const [ pace, setPace ] = useState<number>(500);
	const [ hidden, setHidden ] = useState<string>('');

	const handleShowLinks = (): void => {
		setShowLinks(!showLinks);
		setPace(showLinks ? 500 : 350);
		setTimeout(() => {
			setHidden(showLinks ? '' : 'hidden');
		}, pace);
	};

	return (
		<html lang="fr" className={`${ cardo.variable } ${ inria.variable } ${ bebasNeue.variable }`}>
			<body>
				<ThemeRegistry options={{ key: 'mui' }}>
					<MobileNavbar handleShowLinks={handleShowLinks} showLinks={showLinks} path={pathname} />
					{ pathname === '/' && <Home handleClick={handleShowLinks} hidden={hidden} /> }
					{ pathname !== '/' && children }
					<Footer />
				</ThemeRegistry>
				<script
					type="text/javascript"
					src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" async />
			</body>
		</html>
	);
};
export default RootLayout;