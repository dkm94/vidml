import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react';

interface ContactFormInputProps extends ComponentPropsWithoutRef<'div'>{
	label: string;
	type: 'text';
	name: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ContactFormInput = (props: ContactFormInputProps) => {
	const { label, type, name, onChange: handleChange } = props;
	
	return (
		<div className='flex flex-col'>
			<label>{label}</label>
			<input className='focus:outline-none bg-transparent border-b border-solid border-black' type={type} name={name} onChange={handleChange} />
		</div>
	);
};

export default ContactFormInput;