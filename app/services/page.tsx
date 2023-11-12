import { PageContent, PageHeader } from '@/components';

const ServicesPage = () => {
	return (
		<main className='services flex flex-col gap-2'>
			<PageHeader title='Services'/>
			<PageContent>
				<div>Text</div>
			</PageContent>
		</main>
	);
};

export default ServicesPage;