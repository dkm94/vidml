import React from 'react';

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
	onChange: (e) => void;
}

const ContactFormTextArea = (props: ComponentProps) => {
	const { label, name, onChange: handleChange } = props;

	return (
		<div className='flex flex-col'>
			<label className='mb-2'>{label}</label>
			<textarea className='bg-transparent border border-solid border-black' rows={10} name={name} onChange={handleChange} />
		</div>
	);
};

export default ContactFormTextArea;