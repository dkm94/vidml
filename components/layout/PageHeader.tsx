import { SquareComponent } from '@/components';
import { PageHeaderProps } from '@/types';
import React from 'react';

const PageHeader = ({ title }: PageHeaderProps) => {
	return (
		<section className={'page-header relative h-[235px] bg-header-bg'}>
			<SquareComponent isLink={false} text={title} containerStyle='border-slate-900 z-[100] bg-slate-50' childStyle='text-slate-900' />
		</section>
	);
};

export default PageHeader;