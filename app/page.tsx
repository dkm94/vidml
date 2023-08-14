import React from 'react';

export default function Home() {
	const videoURL = 'https://res.cloudinary.com/dbj8kfftk/video/upload/v1692029954/smoke_tmttji.mp4';

	return (
		<main className="overflow-hidden relative h-[94vh]">
			<div className='absolute border-solid border-slate-50 border-8 left-2/4 top-[42%] translate-x-[-50%] translate-y-2/4 px-12 py-3'>
				<span className='text-stone-50 text-4xl square-title'>Enter</span>
			</div>
			<video autoPlay loop muted className='h-[100%] object-cover w-full'>
				<source src={videoURL} type="video/mp4" height="100%" width="200" />
			</video>
		</main>
	);
}
