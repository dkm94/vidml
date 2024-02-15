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
				<div className='text-slate-100 px-16 flex flex-col gap-5'>
					<h2 className='text-balance'>Des services sur mesure pour vous aider à réaliser le projet de vos rêves</h2>
				</div>
			</PageContent>
		</main>
	);
};

export default ServicesPage;