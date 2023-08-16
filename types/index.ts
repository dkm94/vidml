
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
}

export interface PageContentProps {
    children: React.ReactNode;
}