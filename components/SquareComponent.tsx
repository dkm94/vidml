'use client';
import { bebasNeue } from '@/app/fonts';

import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

interface SquareComponentsProps extends ComponentPropsWithoutRef<'div'> {
	isLink: boolean;
	path?: string;
	containerStyle: string;
	childStyle: string;
	text: string;
}

const SquareComponent = ({ isLink, path, containerStyle, childStyle, text }: SquareComponentsProps) => {
	return (
		<div className={`absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] px-8 py-3 ${ containerStyle }`}>
			{isLink ? <Link href={{ pathname: path }} className={`text-4xl ${ bebasNeue.className } ${ childStyle }`}>{text}</Link> : <h1 className={`${ bebasNeue.className } text-2xl md:text-lg ${ childStyle }`}>{text}</h1>}
		</div>
	);
};

export default SquareComponent;