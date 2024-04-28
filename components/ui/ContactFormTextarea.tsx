import React, { ChangeEvent } from 'react';

// interface TextareaProps {
// 	// onChange: ChangeEventHandler<HTMLTextAreaElement>;
// 	onChange: (e: ChangeEventHandler<HTMLTextAreaElement>) => void;
// }

// interface ContactFormTextAreaProps extends ComponentPropsWithoutRef<'div'> {
// 	name: string;
// 	label: string;
//   }


// type ComponentProps = TextareaProps & ContactFormTextAreaProps;
interface ComponentProps {
	name: string;
	label: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ContactFormTextArea = (props: ComponentProps) => {
	const { label, name, onChange: handleChange } = props;

	return (
		<div className='flex flex-col'>
			<label className='mb-2 font-bold'>{label}</label>
			<textarea className='focus:outline-none bg-[#212121] text-slate-300 border border-solid border-black p-3 resize-none' rows={10} name={name} onChange={handleChange} />
		</div>
	);
};

export default ContactFormTextArea;