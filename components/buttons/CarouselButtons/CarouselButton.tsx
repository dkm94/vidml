import React, { ComponentPropsWithoutRef } from 'react';

interface CarouselButtonProps extends ComponentPropsWithoutRef<'button'>{
	content: string;
	className: string;
};

const CarouselButton = (props: CarouselButtonProps) => {
	const { content, className, ...rest } = props;

	const combinedClassName = `w-10 h-10 bg-[#eaeae9] rounded-full ${ className || '' }`;

	return (
		<button {...rest} className={combinedClassName}>{content}</button>
	);
};

export default CarouselButton;