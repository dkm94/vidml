import React, { ChangeEvent, ComponentPropsWithoutRef, TextareaHTMLAttributes } from 'react';

interface CustomFormTextareaDivProps extends ComponentPropsWithoutRef<'div'> {
    label: string;
}

interface CustomFormTextareaTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

type CustomFormTextareaProps = CustomFormTextareaDivProps & CustomFormTextareaTextareaProps;

const CustomFormTextarea = (props: CustomFormTextareaProps) => {
	const { label, id, onChange: handlechange } = props;

	return (
		<div className="mb-3 flex flex-col">
			<label htmlFor={id} className="form-label text-slate-50">{label}</label>
			<textarea
				id={id}
				onChange={handlechange}
				name={id}
				rows={10}
				maxLength={5000}
				className="form-control focus:outline-none bg-zinc-700 text-slate-50 placeholder-slate-300 mt-2 h-10 px-3 border-solid border-slate-50 border-2 rounded" 
			/>
		</div>
	);
};

export default CustomFormTextarea;