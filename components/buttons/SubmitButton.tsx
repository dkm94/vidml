import React, { ComponentPropsWithoutRef } from 'react';

interface SubmitButtonProps extends ComponentPropsWithoutRef<'button'>{};

const SubmitButton = (props: SubmitButtonProps) => {
    
	return (
		<button type='submit' className='bg-slate-900 text-slate-50 rounded py-2 px-7'>Send</button>
	);
};

export default SubmitButton;