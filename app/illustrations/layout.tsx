import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ImageLoader, CarouselWrapper, PageContent, PageHeader } from '@/components';

import { Divider } from '@mui/material';

export const metadata: Metadata = { title: 'Illustrations' };
// TODO: disable right click 

export default function IllustrationLayout() {
	return (
		<>
			<PageHeader title='Illustrations' />
			<Divider className='h-2 bg-white min-[815px]:h-[1px]'/>
			<main className='illustrations flex flex-col bg-[rgb(9,8,11)]'>
				<PageContent>
					<Suspense fallback={<ImageLoader />}>
						<CarouselWrapper />
					</Suspense>
				</PageContent>
			</main>
		</>
	);
};