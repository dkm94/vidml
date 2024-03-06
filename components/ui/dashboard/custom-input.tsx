import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react';

interface CustomFormInputProps extends ComponentPropsWithoutRef<'div'> {
    name: string;
    type: string;
	label: string;
    id: string;
    placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomFormInput = (props: CustomFormInputProps) => {
	const { label, type, name, id, placeholder, onChange: handleChange } = props;

	return (
		<div className="mb-3 flex flex-col">
			<label htmlFor={id} className="form-label text-slate-50">{label}</label>
			<input 
				autoComplete='off'
				name={name}
				id={id} 
				onChange={handleChange}
				type={type}
				placeholder={placeholder} 
				className="form-control focus:outline-none bg-zinc-700 text-slate-50 placeholder-slate-300 mt-2 h-10 px-3 border-solid border-slate-50 border-2 rounded" 
			/>
		</div>
	);
};

export default CustomFormInput;