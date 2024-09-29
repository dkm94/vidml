'use client';

import React, { useContext } from 'react';

import Video from '../video/Video';

import { WindowWidthContext } from '../layout/ThirdPartiesWrapper';
import { useShowLinks } from '@/utils/contexts/ShowLinksContext';


const Home = () => {
	const { showLinks: toggle, setShowLinks: setToggle } = useShowLinks();
	const windowWidthContext = useContext(WindowWidthContext);
	
	const isMobile = windowWidthContext?.isMobile ?? false;
	const isTablet = windowWidthContext?.isTablet ?? false;
	const isDesktop = windowWidthContext?.isDesktop ?? false;
	const isLarge = windowWidthContext?.isLarge ?? false;
	const isNotDesktop = isMobile || isTablet;

	const handleClick = () => {
		setToggle(!toggle);
	};
	
	const videoSources = {
		mobile: '/assets/home-video-mobile.mp4',
		tablet: '/assets/home-video-md.mp4',
		desktop: '/assets/home-video-mobile.mp4',
		large: '/assets/home-video-hd-cut.mp4',
	};

	const getVideoSource = () => {
		if (isMobile) return videoSources.mobile;
		if (isTablet) return videoSources.tablet;
		if (isDesktop) return videoSources.desktop;
		if (isLarge) return videoSources.large;
		throw new Error('Error loading video. Please refresh the page');
	};
	
	return (
		<div className={`${ !isMobile && 'w-full' }`}>
			<main className={`overflow-hidden relative ${ isMobile ? 'h-[94vh]' : 'h-[100vh]' } bg-[#09080B]`}>
				{isNotDesktop && (
					<button 
						type='button' 
						className={'no-tap-highlight z-[1000] absolute top-[94%] left-1/2 translate-y-[-50%] translate-x-[-50%] square-title width-base width-gray-900 menu-shadow'} 
						onClick={handleClick}>Menu</button>
				)}
				<div className="absolute top-0 left-0 w-full h-full" />
				<Video src={getVideoSource()} />
			</main>
		</div>
	);
};

export default Home;