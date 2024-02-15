import { Divider } from '@mui/material'; 

import { PageContent, PageHeader } from '@/components';

const ServicesPage = () => {
	return (
		<main className='services h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Services'/>
			<Divider className='h-2 bg-white min-[815px]:h-[1px]' />
			<PageContent>
				<div className='text-slate-100 px-16 flex flex-col gap-5'>
					<h2 className='text-balance'>Des services sur mesure pour vous aider à réaliser le projet de vos rêves</h2>
				</div>
			</PageContent>
		</main>
	);
};

export default ServicesPage;