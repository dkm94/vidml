'use client';

import React from 'react';

import Image from 'next/image';

import { blurDataURL } from '@/constants';

const ImageComponent = () => {
	return (
		<div className='w-max h-fit min-h-[200px] min-w-[300px] max-w-xs border-solid border-white border flex justify-center p-5'>
			<Image 
				src={'/assets/about-me.webp'} 
				alt="" 
				width={300} 
				height={200} 
				className='transition-opacity opacity-0 duration-[2s] w-full h-auto object-cover max-h-[500px]' 
				placeholder='blur' 
				priority 
				loading='eager' 
				blurDataURL={blurDataURL} 
				onLoadingComplete={(img) => img.classList.remove('opacity-0')}
			/>
		</div>
	);
};

export default ImageComponent;