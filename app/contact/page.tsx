import { Divider } from '@mui/material';

import { PageContent, PageHeader } from '@/components';

const ContactPage = () => {
	return (
		<main className='h-full contact flex flex-col bg-[#09080B]'>
			<PageHeader title='Contact'/>
			<Divider style={{
				height: '1px',
				background: '#FFFFFF' 
			}} />
			<PageContent>
				<div>Text</div>
			</PageContent>
		</main>
	);
};

export default ContactPage;