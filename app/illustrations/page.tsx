import { Metadata } from 'next';

import { PageContent, PageHeader, Carousel } from '@/components';
import { Divider } from '@mui/material';

export const metadata: Metadata = { title: 'Illustrations' };

const IllustrationsPage = () => {
	return (
		<main className='illustrations h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Illustrations' />
			<Divider className='h-2 bg-white min-[815px]:h-[1px]'/>
			<PageContent>
				<Carousel />
			</PageContent>

		</main>
	);
};

export default IllustrationsPage;