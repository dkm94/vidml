import React from 'react';
import { PageContentProps } from '@/types';

const PageContent = ({ children, backgroundImage }: PageContentProps) => {
	return (
		<section className={`page-content min-h-[600px] relative bg-${ backgroundImage }`}>
			{children}
		</section>
	);
};

export default PageContent;