'use client';

import { SquareComponent } from '@/components';
import React from 'react';

export default function Home() {
	const videoURL = 'https://res.cloudinary.com/dbj8kfftk/video/upload/v1692029954/smoke_tmttji.mp4';

	return (
		<main className="overflow-hidden relative h-[94vh]">
			<SquareComponent isLink={true} path='/collections' containerStyle='border-slate-50 z-[1000]' childStyle='text-stone-50' text="Enter" />
			<video autoPlay loop muted className='h-[100%] object-cover w-full'>
				<source src={videoURL} type="video/mp4" height="100%" width="200" />
			</video>
		</main>
	);
}
