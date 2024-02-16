'use client';

import React, { FC, createContext } from 'react';

import ThemeRegistry from '@/theme/ThemeRegistry';
import { useWindowWidth } from '@/utils';
import { IWindowWidthContextProps } from '@/types';

interface ThirdPartiesWrapperProps extends React.PropsWithChildren {
    children: React.ReactNode;
}

export const WindowWidthContext = createContext<IWindowWidthContextProps | null>(null);

const ThirdPartiesWrapper: FC<ThirdPartiesWrapperProps> = (props) => {
	const { children } = props;
	const { width } = useWindowWidth();
    
	const isMobile: boolean = width < 500;
	const isTablet: boolean = width > 500 && width < 815;
	const isDesktop: boolean = width > 815 && width < 1024;
	const isLarge: boolean = width > 1024;

	return (
		<ThemeRegistry options={{ key: 'mui' }}>
			<WindowWidthContext.Provider 
				value={{
					isMobile,
					isTablet,
					isDesktop,
					isLarge,
					width
				}}>{width !== 0 && children}</WindowWidthContext.Provider>
		</ThemeRegistry>
	);
};

export default ThirdPartiesWrapper;