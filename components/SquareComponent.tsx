'use client';

import { SquareComponentsProps } from '@/types';
import Link from 'next/link';
import React from 'react';

const SquareComponent = ({ isLink, path, containerStyle, childStyle, text }: SquareComponentsProps) => {
	return (
		<div className={`absolute border-solid border-8 left-2/4 top-[42%] translate-x-[-50%] translate-y-2/4 px-12 py-3 ${ containerStyle }`}>
			{isLink ? <Link href={{ pathname: path }} className={`text-4xl square-title ${ childStyle }`}>{text}</Link> : <span className={`text-4xl square-title ${ childStyle }`}>{text}</span>}
		</div>
	);
};

export default SquareComponent;