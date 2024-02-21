// Video.js
import React, { ComponentPropsWithoutRef, FC } from 'react';

interface VideoProps extends ComponentPropsWithoutRef<'video'> {
	src: string;
}

const Video: FC<VideoProps> = ({ src }: VideoProps) => (
	<video autoPlay loop muted className='h-[100%] object-cover w-full'>
		<source src={src} type="video/mp4" />
		<p className='text-white'>Your browser doesnt support HTML5 video.</p>
	</video>);

export default Video;
