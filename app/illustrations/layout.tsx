import React, { Suspense } from 'react';
import { Metadata } from 'next';

import { Divider } from '@mui/material';

import { PageContent, PageHeader } from '..';
import { CarouselWrapper } from '@/components';

export const metadata: Metadata = { title: 'Illustrations' };

export default async function IllustrationLayout() {
	return (
		<>
			<PageHeader title='Illustrations' />
			<Divider className='h-2 bg-white min-[815px]:h-[1px]'/>
			<main className='illustrations flex flex-col bg-[rgb(9,8,11)]'>
				<PageContent>
					<Suspense fallback={<div className='h-12 w-12 bg-red-700 text-zinc-50'>Loading...</div>}>
						<CarouselWrapper />
					</Suspense>
				</PageContent>
			</main>
		</>
	);
};