import './globals.css';

import type { Metadata } from 'next';

import { Footer, MobileNavbar } from '@/components/layout';
import ThemeRegistry from '../theme/ThemeRegistry';

export const metadata: Metadata = {
	title: 'ViDML | Gallery',
	description: 'Portfolio of ViDML',
};

export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<body>
				<ThemeRegistry options={{ key: 'mui' }}>
					<MobileNavbar />
					{children}
					<Footer />
				</ThemeRegistry>
				<script
					type="text/javascript"
					src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" async />
			</body>
		</html>
	);
}
