// Video.js
import React, { FC } from 'react';

import { VideoProps } from '@/types';

const Video: FC<VideoProps> = ({ src }) => (
	<video autoPlay loop muted className='h-[100%] object-cover w-full'>
		<source src={src} type="video/mp4" />
	</video>);

export default Video;
