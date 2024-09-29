'use client';

import React from 'react';

import { CldImage, CldImageProps } from 'next-cloudinary';
import { useWindowWidth } from '@/utils';

const CloudinaryImg = (props: CldImageProps) => {
	const { src } = props;

	const { width } = useWindowWidth();

    
	if (!src) {
		return <span>L'image n'a pas pu être chargée</span>;
	}

	return (
		<CldImage 
			{...props} 
			src={`${ src }`} 
			alt={src || 'Image'} 
			height={width > 425 ? 400 : 250} 
			width={width > 425 ? 400 : 250}
			crop='fit'
			quality={100}
			fetchFormat='auto'
			dpr='auto'
			responsive
			responsiveUseBreakpoints
		/>
	);
};

export default CloudinaryImg;