import { SquareComponent } from '@/components';
import { PageHeaderProps } from '@/types';

const PageHeader = ({ title }: PageHeaderProps) => {
	return (
		<section className={'page-header bg-cover relative h-[235px] bg-header-bg lg:border-b lg:border-t lg:border-slate-900'}>
			<SquareComponent isLink={false} text={title} containerStyle='border-slate-900 z-[100] bg-slate-50' childStyle='text-slate-900' />
		</section>
	);
};

export default PageHeader;