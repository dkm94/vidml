
export interface SquareComponentsProps {
    isLink: boolean;
    path?: string;
    containerStyle: string;
    childStyle: string;
    text: string;
}

export type Illustration = {
    id: string;
    title: string;
    description?: string;
}

export interface PageHeaderProps {
    title: string;
    backgroundImage: string;
}

type BackgroundImage = 'illustrations-bg' | 'services-bg' | 'about-bg' | 'contact-bg' | 'home-bg';

export interface PageContentProps {
    children: React.ReactNode;
    backgroundImage: BackgroundImage;
}