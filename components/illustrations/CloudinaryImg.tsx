'use client';

import React from 'react';

import { CldImage, CldImageProps } from 'next-cloudinary';
import { useWindowWidth } from '@/utils';

const CloudinaryImg = (props: CldImageProps) => {
	const { src } = props;

	const { width } = useWindowWidth();

    
	if (!src) {
		return 'No image source provided'; // handle empty source
	}

	return (
		<CldImage 
			{...props} 
			src={`${ src }`} 
			alt={src || 'Image'} 
			height={width > 425 ? 400 : 250} 
			width={width > 425 ? 400 : 250}
			crop='fill'
			quality={100}
		/>
	);
};

export default CloudinaryImg;