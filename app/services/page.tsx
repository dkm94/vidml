import { Divider } from '@mui/material'; 

import { PageContent, PageHeader } from '@/components';

const ServicesPage = () => {
	return (
		<main className='services h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Services'/>
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

export default ServicesPage;