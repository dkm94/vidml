import { PageContent, PageHeader } from '@/components';

const ContactPage = () => {
	return (
		<main className='contact flex flex-col gap-2'>
			<PageHeader title='Contact'/>
			<PageContent>
				<div>Text</div>
			</PageContent>
		</main>
	);
};

export default ContactPage;