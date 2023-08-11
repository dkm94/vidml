// app/ThemeRegistry.tsx
'use client';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeOptions } from '@/constants';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const theme = createTheme(themeOptions);

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
function ThemeRegistry({ children }: {
	children: React.ReactNode;
  }) {

	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
}

export default ThemeRegistry;