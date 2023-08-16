import React from 'react';
import { PageContent, PageHeader } from '@/components';

const ServicesPage = () => {
	return (
		<main className='services flex flex-col gap-2'>
			<PageHeader title='Services'/>
			<PageContent>
				<div className={'bg-services-bg content-bg'} aria-hidden="true" />
				<div className='relative'>
				</div>
			</PageContent>
		</main>
	);
};

export default ServicesPage;