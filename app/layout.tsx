import './globals.css';
import type { Metadata } from 'next';

import { Navbar, Footer } from '@/components/layout';
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
			<body className="relative">
				<ThemeRegistry options={{ key: 'mui' }}>
					<Navbar />
					{children}
					<Footer />
				</ThemeRegistry>
			</body>
		</html>
	);
}
