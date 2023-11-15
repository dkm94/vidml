'use client';

import React, { FC, useContext } from 'react';

import { HomeProps } from '@/types';

import Video from '@/components/video/Video';
import { WindowWidthContext } from './layout';

const Home: FC<HomeProps> = (props: HomeProps) => {
	const { handleClick, hidden } = props;

	// const videoURL: string = 'https://res.cloudinary.com/dbj8kfftk/video/upload/v1699741540/vidml/home-video-mobile_g0eswj.mp4';
	// const videoURlXL: string = 'https://res.cloudinary.com/dbj8kfftk/video/upload/v1699878936/vidml/generated-home_kusz4h.mp4';

	const { isMobile } = useContext(WindowWidthContext);

	return (
		<div>
			<main className="overflow-hidden relative h-[94vh]">
				{isMobile && <button type='button' className={`z-[1000] absolute top-[94%] left-1/2 translate-y-[-50%] translate-x-[-50%] square-title width-base width-gray-900 menu-shadow ${ hidden }`} onClick={handleClick}>Menu</button>}
				<div className="absolute top-0 left-0 w-full h-full z-[99]" />
				{isMobile && (
					<Video src="/assets/home-video-mobile.mp4" />
				)}
				{!isMobile && (
					<Video src="/assets/generated-home.mp4" />
				)}

			</main>
		</div>
	);
};
export default Home;
