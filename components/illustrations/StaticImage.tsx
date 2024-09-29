'use client';

import React from 'react';
import Image from 'next/image';

import { useWindowWidth } from '@/utils';

const StaticImage = (props: any) => {
	const { src } = props;

	const { width } = useWindowWidth();

	return (
		<Image 
			{...props}
			src={src} 
			alt="Image" 
			height={width > 425 ? 400 : 250} 
			width={width > 425 ? 400 : 250}
		/>

	);
};

export default StaticImage;