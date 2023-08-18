import { PageContentProps } from '@/types';

const PageContent = ({ children }: PageContentProps) => {
	return (
		<section className={'page-content min-h-[600px] relative pt-16 pb-28 px-8 font-cardo'}>
			{children}
		</section>
	);
};

export default PageContent;