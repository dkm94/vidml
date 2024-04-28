import { PageContentProps } from '@/types';

const PageContent = ({ children }: PageContentProps) => {
	return (
		<section className={'page-content min-h-[600px] max-w-7xl w-full self-center relative pt-16 pb-28 px-8 lg:border-b lg:border-t lg:border-slate-900 bg-[#09080B] overflow-hidden flex flex-col items-center'}>
			{children}
		</section>
	);
};

export default PageContent;