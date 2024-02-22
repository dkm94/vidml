import React, { Children, cloneElement } from 'react';
import { Metadata } from 'next';

import { Divider } from '@mui/material';

import { PageContent, PageHeader } from '..';
import { Carousel } from '@/components';

import { getResults } from '@/utils';

export const metadata: Metadata = { title: 'Illustrations' };

interface LayoutProps {
    children: React.ReactElement | React.ReactElement[];
  }

export default async function IllustrationLayout({ children }: LayoutProps) {
	const { resources } = await getResults();

	const childrenWithProps = Children.map(children,
		(child) => {
			return cloneElement(
				child,
				{ resources },
				null
			);
		});

	return (
		<>
			<PageHeader title='Illustrations' />
			<Divider className='h-2 bg-white min-[815px]:h-[1px]'/>
			<main className='illustrations flex flex-col bg-[rgb(9,8,11)]'>
				<PageContent>
					<Carousel>{childrenWithProps}</Carousel>
				</PageContent>
			</main>
		</>
	);
};