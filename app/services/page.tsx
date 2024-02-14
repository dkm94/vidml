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
					<p className='text-4xl font-bold'>We offer a wide range of services to help you achieve your dream project.</p>
				</div>
			</PageContent>
		</main>
	);
};

export default ServicesPage;