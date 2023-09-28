import { PageContent, PageHeader } from '@/components';

const ContactPage = () => {
	return (
		<main className='contact flex flex-col gap-2'>
			<PageHeader title='Contact'/>
			<PageContent>
				<div className={'bg-contact-bg content-bg'} aria-hidden="true" />
				<div className='relative'>
				</div>
			</PageContent>
		</main>
	);
};

export default ContactPage;