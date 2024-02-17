import './globals.css';

import React, { FunctionComponent } from 'react';
import type { Metadata } from 'next';
import { bebasNeue, cardo, inria } from './fonts';

import { App, ThirdPartiesWrapper } from '@/components/layout';

import { LayoutProps } from '@/types';

export const metadata: Metadata | null = (typeof window !== 'undefined')
	? {
		title: 'ViDML | Gallery',
		description: 'Portfolio de ViDML',
	}
	: null;

export const RootLayout: FunctionComponent<LayoutProps> = ( props: LayoutProps ) => {
	const { children } = props;
	
	return (
		<html lang="fr" className={`${ cardo.variable } ${ inria.variable } ${ bebasNeue.variable }`} suppressHydrationWarning={true}>
			<body className="min-[815px]:min-h-[100vh]">
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