/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ComponentPropsWithoutRef } from 'react';

interface SubmitButtonProps extends ComponentPropsWithoutRef<'button'>{};

const SubmitButton = (props: SubmitButtonProps) => {
    
	return (
		<button type='submit' className='bg-black text-slate-50 rounded py-2 px-7'>Send</button>
	);
};

export default SubmitButton;