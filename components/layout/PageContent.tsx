import { PageContentProps } from '@/types';

const PageContent = ({ children }: PageContentProps) => {
	return (
		<section className={'page-content min-h-[600px] h-full w-full self-center relative pt-16 pb-28 px-8 font-cardo lg:border-b lg:border-t lg:border-slate-900 bg-[#09080B] overflow-hidden'}>
			{children}
		</section>
	);
};

export default PageContent;