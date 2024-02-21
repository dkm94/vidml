import { Metadata } from 'next';

import { Divider } from '@mui/material'; 

import { PageContent, PageHeader } from '@/components';

export const metadata: Metadata = { title: 'Services' };

function ServicesPage(){
	return (
		<main className='services h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Services'/>
			<Divider className='h-2 bg-white min-[815px]:h-[1px]' />
			<PageContent>
				<div className='text-slate-100 flex flex-col gap-5 min-[815px]:px-16'>
					<h2 className='text-balance'>Des services sur mesure pour vous aider à réaliser le projet de vos rêves</h2>
				</div>
			</PageContent>
		</main>
	);
}

export default ServicesPage;