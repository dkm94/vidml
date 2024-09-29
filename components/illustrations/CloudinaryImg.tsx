'use client';

import React from 'react';
import Image from 'next/image';

import { CldImage, CldImageProps } from 'next-cloudinary';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

import { useWindowWidth } from '@/utils';

const CloudinaryImg = (props: CldImageProps) => {
	const { src } = props;

	const { width } = useWindowWidth();

    
	if (!src) {
		return <span>L'image n'a pas pu être chargée</span>;
	}

	const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME } });
	const myImage = cld.image(src);
	myImage.resize(fill().width(400).height(400));

	return (
		// <div>
		// 	<AdvancedImage cldImg={myImage} />
		// </div>
		// <div>
		// 	<img
		// 		style={{
		// 			height: width > 425 ? '400px' : '250px',
		// 			width: width > 425 ? '400px' : '250px',
		// 		}}
		// 		src={'https://res.cloudinary.com/dbj8kfftk/image/upload/v1708357532/vidml/nivea.jpg'}/>
		// </div>
		<CldImage 
			{...props} 
			src={`${ src }`} 
			alt={src || 'Image'} 
			height={400} 
			width={400}
			crop='fill'
			quality={100}
			fetchFormat='auto'
			dpr='auto'
			responsive
			responsiveUseBreakpoints
		/>
	);
};

export default CloudinaryImg;