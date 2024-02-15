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
					<h2 className='text-balance'>{'Et si on en discutait ?'}</h2>
					<div className='flex flex-col'>
						<h3 className='text-balance'>{'Vous avez des questions ? Vous souhaitez obtenir un devis ?'}</h3>
						<h3>{' N\'hésitez pas à me contacter'}</h3>
					</div>
				</div>
				<ContactForm />
			</PageContent>
		</main>
	);
};

export default ContactPage;