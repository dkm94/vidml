'use client';

import { SquareComponentsProps } from '@/types';
import Link from 'next/link';

const SquareComponent = ({ isLink, path, containerStyle, childStyle, text }: SquareComponentsProps) => {
	return (
		<div className={`absolute border-solid border-8 left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] px-8 py-3 ${ containerStyle }`}>
			{isLink ? <Link href={{ pathname: path }} className={`text-4xl square-title ${ childStyle }`}>{text}</Link> : <h1 className={`text-4xl square-title ${ childStyle }`}>{text}</h1>}
		</div>
	);
};

export default SquareComponent;