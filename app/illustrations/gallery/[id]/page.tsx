'use client';

import React from 'react';
import { PageContent, PageHeader } from '@/components';
import { galleries } from '@/constants';
import { cardo } from '@/app/fonts';
import Image from 'next/image';

interface GalleryPageProps {
    params: {
        id: number | string
    }
}

const GalleryPage = ({ params }: GalleryPageProps) => {

	const filteredGallery = galleries.filter(gallery => gallery.id === params.id);

	return (
		<main className='gallery flex flex-col gap-2'>
			<PageHeader title='Gallery'/>
			<div className={`py-6 bg-[#fef8f1] ${ cardo.variable } font-mono`}>
				<h2 className='text-center'>{filteredGallery[ 0 ].title}</h2>
			</div>
			<PageContent>
				<div className={'bg-contact-bg content-bg'} aria-hidden="true" />
				<div className='relative'>
					{filteredGallery?.map((gallery, index) => (
						<div key={index} className='grid grid-cols-1 gap-2'>
							{gallery?.images?.map(({ title, description, url }, index) => 
								<div key={index} className='relative'>
									<Image src={url} alt={title} className='w-full h-full object-cover' width={200} height={300} />
									<div className='description-box absolute bottom-0 flex flex-col w-full h-52 gap-2 bg-opacity-80 p-4 justify-between self-end'>
										<div className='flex flex-col gap-2'>
											<div className='font-bold'>{title}</div>
											<div>{description}</div>
										</div>
										<div className='w-full flex justify-end'>
											<button className='text-white bg-slate-900 uppercase w-fit py-1 px-4'>
											See less
											</button>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</PageContent>
		</main>
	);
};

export default GalleryPage;