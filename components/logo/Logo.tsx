import React, { FC, useContext } from 'react';
import Image from 'next/image';
import { ILogoProps } from '@/types';
import { WindowWidthContext } from '@/app/layout';

const Logo: FC<ILogoProps> = ({ background, height, width }) => {
	// const pathname = usePathname();

	const windowWidthContext = useContext(WindowWidthContext);
	const isDesktop = windowWidthContext?.isDesktop ?? false;
	const isLarge = windowWidthContext?.isLarge ?? false;
	const isNotMobile = isDesktop || isLarge;

	return (
		<div
			className={`cursor-pointer ml-auto mr-auto p-4 flex justify-center items-center ${ background } ${ height } ${ width } ${ isNotMobile ? 'mt-[180px]' : '' }`}
			onClick={() => {
				window.location.pathname = '/';
			}}
		>
			<Image 
				src='/assets/logo-2.png' 
				height={50}
				width={120} 
				alt='logo' 
				className='h-full object-contain'
				style={{ width: 'auto' }}
				priority={true}
			/>
		</div>
	);
};

export default Logo;