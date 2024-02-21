import { ReactNode } from 'react';

export type Gallery = {
    id: string;
    title: string;
    images: ImageType[];
}

export type ImageType = {
    id: string | number;
    title: string;
    description?: string;
    url: string;
}

export type IllustrationType = {
    id: number;
    url: string;
}

export interface PageContentProps {
    children: React.ReactNode;
}

export type NavLink = {
    title: string;
    path: string;
}
export interface NavLinkProps {
    id: number;
    title: string;
    path: string;
    setShowLinks: () => void;
}

export interface LayoutProps {
	children: ReactNode | undefined;
  };

export interface MobileNavbarProps {
	path: string;
    windowWidth?: number;
};

export interface DesktopNavbarProps {
    path: string;
};

export interface IWindowWidthContextProps {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean
    isLarge: boolean;
    width: number;
}

export interface ILogoProps {
    background: string; 
    height: string;
    width: string;
    windowWidth?: number;
}

export interface ISocialButtonProps {
    path: string;
    icon: ReactNode;
}

export interface ImageProps {
    id: number;
    height: string;
    width: string;
    public_id: string;
    format: string;
    blurDataUrl?: string;
  }