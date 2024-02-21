'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { galleries } from '@/constants';

const ImagesList = (props) => {
	const { params } = props;
	const [ selectedId, setSelectedId ] = useState<string | number>('');

	const getSelectedId = (id: number | string) => {
		setSelectedId(id);
	};

	const showMore = (id: number | string) => (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		getSelectedId(id);
	};

	const showLess = (): void => {
		getSelectedId('');
	};

	const filteredGallery = galleries.filter(gallery => gallery.id === params.id);
	return (
		<div className='relative'>
			{filteredGallery?.map((gallery, index) => (
				<div key={index} className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
					{gallery?.images?.map(({ title, description, url, id }: ImageType, index: number) =>
						<div key={index} className='flex justify-center'>
							<div className='relative'>
								<Image src={url} alt={title} className='w-auto h-full object-cover max-h-[400px]' width={200} height={300} />
								{selectedId == id ? <div className='bg-gradient-to-t from-gray-400 to-transparent absolute bottom-0 flex flex-col w-full h-52 gap-2 bg-opacity-80 p-4 justify-between self-end'>
									<div className='flex flex-col gap-2'>
										<div className='font-bold'>{title}</div>
										<div>{description}</div>
									</div>
									<div className='w-full flex justify-end'>
										<button type='button' className='text-white bg-slate-900 uppercase w-fit py-1 px-4' onClick={showLess}>
											See less
										</button>
									</div>
								</div> : <div className='absolute bottom-0 w-full justify-end p-4 h-fit flex' >
									<button type='button' className='text-white bg-slate-900 uppercase w-fit py-1 px-4' onClick={showMore(id)} >See more</button></div>}
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ImagesList;