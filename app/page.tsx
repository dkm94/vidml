'use client';

import React, { FC, useContext } from 'react';

import { HomeProps } from '@/types';

import Video from '@/components/video/Video';
import { WindowWidthContext } from '@/components/layout/ThirdPartiesWrapper';

const Home: FC<HomeProps> = (props: HomeProps) => {
	const { handleClick } = props;

	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;
	const isTablet = windowWidthContext?.isTablet ?? false;
	const isDesktop = windowWidthContext?.isDesktop ?? false;
	const isLarge = windowWidthContext?.isLarge ?? false;

	const showMenuBtn = isMobile || isTablet;

	return (
		<div className={`${ !isMobile && 'w-full' }`}>
			<main className={`overflow-hidden relative ${ isMobile ? 'h-[94vh]' : 'h-[100vh]' } bg-[#09080B]`}>
				{showMenuBtn && <button type='button' className={'z-[1000] absolute top-[94%] left-1/2 translate-y-[-50%] translate-x-[-50%] square-title width-base width-gray-900 menu-shadow'} onClick={handleClick}>Menu</button>}
				<div className="absolute top-0 left-0 w-full h-full z-[99]" />
				{isMobile && (
					<Video src="/assets/home-video-mobile.mp4" />
				)}
				{isTablet && (
					<Video src="/assets/home-video-md.mp4" />
				)}
				{isDesktop && (
					<Video src="/assets/home-video-mobile.mp4" />
				)}
				{isLarge && (
					<Video src="/assets/home-video-hd-cut.mp4" />
				)}
			</main>
		</div>
	);
};
export default Home;
