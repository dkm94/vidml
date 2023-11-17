import React, { FC, useContext } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ILogoProps } from '@/types';
import { WindowWidthContext } from '@/app/layout';

const Logo: FC<ILogoProps> = ({ background, height, width }) => {
	// const pathname = usePathname();

	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;

	return (
		<div
			className={`cursor-pointer ml-auto mr-auto p-4 flex justify-center items-center ${ background } ${ height } ${ width } ${ !isMobile ? 'absolute top-[120px]' : '' }`}
			onClick={() => {
				window.location.pathname = '/';
			}}
		>
			<Image src='/assets/logo.png' height={50} width={120} alt='logo' className='h-full object-contain' />
		</div>
	);
};

export default Logo;