import React from 'react';
import { PageContentProps } from '@/types';

const PageContent = ({ children }: PageContentProps) => {
	return (
		<section className='page-content min-h-[600px] relative py-16 px-8'>
			{children}
		</section>
	);
};

export default PageContent;