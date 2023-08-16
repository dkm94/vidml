import React from 'react';
import { PageContentProps } from '@/types';
import { cardo } from '@/app/fonts';

const PageContent = ({ children }: PageContentProps) => {
	return (
		<section className={`page-content min-h-[600px] relative py-16 px-8 ${ cardo.variable } font-mono`}>
			{children}
		</section>
	);
};

export default PageContent;