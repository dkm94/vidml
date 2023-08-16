import React from 'react';
import { illustrations } from '@/constants';
import { PageContent, PageHeader } from '@/components';

const IllustrationsPage = () => {
	return (
		<main className='illustrations flex flex-col gap-2'>
			<PageHeader title='Illustrations' backgroundImage="header-bg" />
			<PageContent backgroundImage="illustrations-bg">
				<div className='relative'>
					Illustrations
				</div>
			</PageContent>

		</main>
	);
};

export default IllustrationsPage;