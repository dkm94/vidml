'use client';

import { WindowWidthContext } from '@/app/layout';
import { SquareComponent } from '@/components';
import { PageHeaderProps } from '@/types';
import { useContext } from 'react';

const PageHeader = ({ title }: PageHeaderProps) => {

	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;
	const isTablet = windowWidthContext?.isTablet ?? false;
	const isLarge = windowWidthContext?.isLarge ?? false;

	return (
		<section className={`page-header bg-cover relative h-[179px] lg:border-b lg:border-t lg:border-slate-900 ${ isMobile && 'bg-background-section-sm' } ${ isTablet && 'bg-background-section-md' } ${ isLarge && 'bg-background-section-md' } `}>
			<SquareComponent isLink={false} text={title} containerStyle='border-slate-900 z-[100] bg-slate-50' childStyle='text-slate-900' />
		</section>
	);
};

export default PageHeader;