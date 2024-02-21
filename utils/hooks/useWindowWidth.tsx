'use client';

import { useEffect, useState } from 'react';

const useWindowWidth = () => {
	const [ width, setWidth ] = useState<number>(0);

	const getWindowWidth = () => {
		const w = window.outerWidth;
		if(typeof w !== 'undefined'){
			setWidth(w);
		}
	};

	useEffect(() => {
		getWindowWidth();
		window.addEventListener('resize', getWindowWidth);
		return () => {
			window.removeEventListener('resize', getWindowWidth);
		};
	}, []);

	return {
		width,
		setWidth,
		getWindowWidth
	};
};

export default useWindowWidth;