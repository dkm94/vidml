import './globals.css';

import React, { FunctionComponent } from 'react';
import type { Metadata } from 'next';
import { bebasNeue, cardo, inria, inter } from './fonts';

import { App, ThirdPartiesWrapper } from '@/components/layout';

import { LayoutProps } from '@/types';

// export const metadata: Metadata | null = (typeof window !== 'undefined')
// 	? {
// 		title: 'ViDML | Gallery',
// 		description: 'Portfolio de ViDML',
// 	}
// 	: null;
export const metadata: Metadata = {
	title: {
	  template: '%s | ViDML',
	  default: 'ViDML Gallery',
	},
	description: 'Explorez l\'univers des illustrations avec Virginie DML. Découvrez des créations originales qui fusionnent l\'esthétique artistique et les tendances de la mode.',
	// metadataBase: new URL('https://vidml-gallery.fr/'),
};

export const RootLayout: FunctionComponent<LayoutProps> = ( props ) => {
	const { children } = props;
	
	return (
		<html lang="fr" className={`${ cardo.variable } ${ inria.variable } ${ bebasNeue.variable }`} suppressHydrationWarning={true}>
			<body className={`${ inter.className } antialiased min-[815px]:min-h-[100vh]`}>
				<ThirdPartiesWrapper>
					<App>{children}</App>
				</ThirdPartiesWrapper>
				<script
					type="text/javascript"
					src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" async />
			</body>
		</html>
	);
};
export default RootLayout;