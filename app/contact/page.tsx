import { Divider } from '@mui/material';

import { ContactForm, PageContent, PageHeader } from '@/components';

const ContactPage = () => {
	return (
		<main className='h-full contact flex flex-col bg-[#09080B]'>
			<PageHeader title='Contact'/>
			<Divider style={{
				height: '1px',
				background: '#FFFFFF' 
			}} />
			<PageContent>
				<div className='text-slate-100 px-16 flex flex-col gap-5'>
					<h2 className='text-balance'>{'Let\'s discuss about your project !'}</h2>
					<h3 className='text-pretty'>For business inquiries, quotes or if you have any question, I would be happy to fulfill your request</h3>
				</div>
				<ContactForm />
			</PageContent>
		</main>
	);
};

export default ContactPage;