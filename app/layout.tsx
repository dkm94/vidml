'use client';

import './globals.css';

import React, { FunctionComponent, ReactNode, useState } from 'react';
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { bebasNeue, cardo, inria } from './fonts';

import { Footer, MobileNavbar } from '@/components/layout';
import ThemeRegistry from '../theme/ThemeRegistry';
import Home from './page';

export const metadata: Metadata = {
	title: 'ViDML | Gallery',
	description: 'Portfolio of ViDML',
};

interface LayoutProps {
	children: ReactNode | undefined;
  };

export const RootLayout: FunctionComponent<LayoutProps> = ( props: LayoutProps ) => {

	const { children } = props;

	const pathname: string = usePathname();
	const [ showLinks, setShowLinks ] = useState<boolean>(false);
	const [ btnTitle, setBtnTitle ] = useState<string>('Menu');
	const [ pace, setPace ] = useState<number>(500);
	const [ textColor, setTextColor ] = useState<string>('text-black');
	const [ opacity, setOpacity ] = useState<string>('opacity-100');

	const handleShowLinks = (): void => {
		setShowLinks(!showLinks);
		setPace(showLinks ? 500 : 0);
		setTimeout(() => {
			setBtnTitle(showLinks ? 'Menu' : 'Exit');
			setTextColor(showLinks ? 'text-black' : 'text-gray-300');
			setOpacity(showLinks ? 'opacity-100' : 'opacity-50');
		}, pace);
	};

	return (
		<html lang="fr" className={`${ cardo.variable } ${ inria.variable } ${ bebasNeue.variable }`}>
			<body>
				<ThemeRegistry options={{ key: 'mui' }}>
					<MobileNavbar handleShowLinks={handleShowLinks} showLinks={showLinks} path={pathname} setShowLinks={setShowLinks}
					/>
					{ pathname === '/' && <Home handleClick={handleShowLinks} title={btnTitle} color={textColor} opacity={opacity} />}
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