/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ComponentPropsWithoutRef } from 'react';

interface SubmitButtonProps extends ComponentPropsWithoutRef<'button'>{
	className: string;
	text: string;
	type: 'submit' | 'button' | 'reset' ;
};

const SubmitButton = (props: SubmitButtonProps) => {
	const { className, text, ...rest } = props;
	const concatClasses = `border-black border-solid py-2 px-7 ${ className }`;
    
	return (
		<button {...rest} className={concatClasses}>{text}</button>
	);
};

export default SubmitButton;