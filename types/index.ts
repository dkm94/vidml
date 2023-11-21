import { ReactNode } from "react";

export interface SquareComponentsProps {
    isLink: boolean;
    path?: string;
    containerStyle: string;
    childStyle: string;
    text: string;
}

type Image = {
    id: string | number;
    title: string;
    description?: string;
    url: string;
}

export type Gallery = {
    id: string;
    title: string;
    images?: Image[];
}

export interface PageHeaderProps {
    title: string;
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

export interface HomeProps {
	handleClick: () => void;
	hidden: string;
};

export interface LayoutProps {
	children: ReactNode | undefined;
  };

export interface VideoProps {
    src: string;
}

export interface MobileNavbarProps {
	handleShowLinks: () => void;
	showLinks: boolean;
	path: string;
    windowWidth?: number;
};

export interface DesktopNavbarProps extends MobileNavbarProps {
};

export interface IWindowWidthContextProps {
    isMobile: boolean | null;
    isTablet: boolean | null;
    isDesktop: boolean | null
    isLarge: boolean | null;
    isNotLarge: boolean | null;
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