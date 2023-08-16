
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