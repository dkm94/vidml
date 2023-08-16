import React from 'react';
import { PageContentProps } from '@/types';

const PageContent = ({ children, backgroundImage }: PageContentProps) => {
	return (
		<section className='page-content min-h-[600px] relative'>
			<div className={`bg-${ backgroundImage } absolute top-0 bottom-0 left-0 right-0 content-[""] opacity-40`} aria-hidden="true" />
			<div className='relative'>{children}</div>
		</section>
	);
};

export default PageContent;