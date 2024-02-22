'use client';

import React from 'react';

import { CldImage, CldImageProps } from 'next-cloudinary';
import { useWindowWidth } from '@/utils';

const CloudinaryImg = (props: CldImageProps) => {
	const { src } = props;
	alert('CloudinaryImg');
	console.log('🚀 ~ CloudinaryImg ~ src:', src);

	const { width } = useWindowWidth();

    
	if (!src) {
		return 'No image source provided';
	}

	return (
		<CldImage 
			{...props} 
			src={`${ src }`} 
			alt={src} 
			height={width > 425 ? 400 : 250} 
			width={width > 425 ? 400 : 250}
			crop='fill'
		/>
	);
};

export default CloudinaryImg;