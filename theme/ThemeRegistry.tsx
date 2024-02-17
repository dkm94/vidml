'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { themeOptions } from '@/constants';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const theme = createTheme(themeOptions);

interface ThemeRegistryProps {
	children: React.ReactNode;
	options?: unknown;
}

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
function ThemeRegistry({ children }: ThemeRegistryProps) {

	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				<>{children}</>
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
}

export default ThemeRegistry;