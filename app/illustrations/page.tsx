'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { IllustrationType } from '@/types';
import { illustrations } from '@/constants';
import { PageContent, PageHeader } from '@/components';

const IllustrationsPage = () => {

	const [ gallery, setGallery ] = useState<IllustrationType[]>([]);

	useEffect(() => setGallery(illustrations), []);

	return (
		<main className='illustrations h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Illustrations' />
			<PageContent>
				<div className='w-full h-full flex justify-center'>
					<ul className='flex flex-row h-full w-[400px] overflow-hidden'>
						{gallery?.map(({ id, url }, i) => {
							return <Image key={i} alt="" src={url} height={400} width={400} style={{ objectFit: 'contain' }} />;
						})}
					</ul>
				</div>
			</PageContent>

		</main>
	);
};

export default IllustrationsPage;