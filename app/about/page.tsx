import { PageContent, PageHeader } from '@/components';

const AboutPage = () => {
	return (
		<main className='about flex flex-col gap-2'>
			<PageHeader title='About me'/>
			<PageContent>
				<div className={'bg-about-bg content-bg'} aria-hidden="true" />
				<div className='relative'>
				</div>
			</PageContent>
		</main>
	);
};

export default AboutPage;