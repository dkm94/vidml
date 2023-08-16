import React from 'react';
import { illustrations } from '@/constants';
import { PageContent, PageHeader } from '@/components';

const IllustrationsPage = () => {

	const titleToArray = (title: string): React.ReactNode => {
		return title.split(' ').map((word: string) => <><span key={word}>{word}</span><br /></>);
	};

	return (
		<main className='illustrations flex flex-col gap-2'>
			<PageHeader title='Illustrations' />
			<PageContent>
				<div className={'bg-illustrations-bg content-bg'} aria-hidden="true" />
				<div className='relative'>
					<span className='content-[""] absolute left-2/4 w-1 h-full bg-slate-900' aria-hidden="true"></span>
					<ul className='relative py-8 flex flex-col gap-10'>
						{illustrations.map(({ id, title }, index) => {
							return <li key={id} className="relative flex odd:flex-row odd:text-right even:flex-row-reverse even:text-left">
								<div className='w-1/2 px-6 uppercase'>{titleToArray(title)}</div>
								<div className='w-1/2'/>
							</li>;
						})}
					</ul>
				</div>
				
			</PageContent>

		</main>
	);
};

export default IllustrationsPage;