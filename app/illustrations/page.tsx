import React from 'react';
import { galleries } from '@/constants';
import { PageContent, PageHeader } from '@/components';
import Link from 'next/link';

const IllustrationsPage = () => {

	const titleToArray = (title: string): React.ReactNode => {
		return title.split(' ').map((word: string) => <><span className='text-xl' key={word}>{word}</span><br /></>);
	};

	return (
		<main className='illustrations flex flex-col gap-2'>
			<PageHeader title='Illustrations' />
			<PageContent>
				<div className={'bg-illustrations-bg content-bg'} aria-hidden="true" />
				<div className='relative'>
					<span className='content-[""] absolute left-2/4 w-[1px] h-full bg-slate-900' aria-hidden="true"></span>
					<ul className='relative py-8 flex flex-col gap-10'>
						{galleries.map(({ id, title }, index) => {
							return <li key={id} className="relative flex odd:flex-row odd:text-right even:flex-row-reverse even:text-left">
								<Link href={`/illustrations/gallery/${ id }`} className='w-1/2 px-6 uppercase'>{titleToArray(title)}</Link>
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