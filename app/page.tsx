'use client';

import React, { FC } from 'react';

import { HomeProps } from '@/types';

const Home: FC<HomeProps> = (props: HomeProps) => {
	const { handleClick, hidden } = props;

	const videoURL: string = 'https://res.cloudinary.com/dbj8kfftk/video/upload/v1699741540/vidml/home-video-mobile_g0eswj.mp4';
	
	return (
		<div>
			<main className="overflow-hidden relative h-[94vh]">
				<button type='button' className={`z-[1000] absolute top-[94%] left-1/2 translate-y-[-50%] translate-x-[-50%] square-title text-base text-gray-900 menu-shadow ${ hidden }`} onClick={handleClick}>Menu</button>
				<div className="absolute top-0 left-0 w-full h-full z-[99]">
				</div>
				<video autoPlay loop muted className='h-[100%] object-cover w-full'>
					<source src={videoURL} type="video/mp4" height="100%" width="200" />
				</video>
			</main>
		</div>
	);
};
export default Home;
