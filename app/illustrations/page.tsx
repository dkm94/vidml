'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { IllustrationType } from '@/types';
import { illustrations } from '@/constants';
import { PageContent, PageHeader } from '@/components';

const IllustrationsPage = () => {

	const [ gallery, setGallery ] = useState<IllustrationType[]>([]);
	const [ activeClass, setActiveClass ] = useState<number>(0);
	const [ translateX, setTranslateX ] = useState<number>(0);

	useEffect(() => setGallery(illustrations), []);

	useEffect(() => {
		const images = document.querySelectorAll('img');
		images.forEach((image, i) => {
			image.addEventListener('click', () => setActiveClass(i));
		});

		return () => {
			images.forEach((image, i) => {
				image.removeEventListener('click', () => setActiveClass(i));
			});
		};
	}, []);

	const handleNextButton = () => {
		if (activeClass === 0) {
			setActiveClass(gallery.length - 1);
		} else {
			setActiveClass(activeClass - 1);
		}
	};

	const handlePrevButton = () => {
		if (activeClass === gallery.length - 1) {
			setActiveClass(0);
		} else {
			setActiveClass(activeClass + 1);
		}
	};

	
	useEffect(() => {
		setTranslateX(activeClass * 400); // récupérer dynamiquement la largeur de l'image avec clientWidth
		// https://www.kindacode.com/article/react-get-the-width-height-of-a-dynamic-element/
	}, [ activeClass ]);
	

	return (
		<main className='illustrations h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Illustrations' />
			<PageContent>
				<div className='w-full h-full flex justify-center'>
					<ul className='flex flex-row h-full w-[400px] gap-3'>
						{gallery?.map(({ id, url }, i) => {
							return (
								<Image 
									key={i} 
									alt="" 
									src={url} 
									height={400} 
									width={400} 
									className={`cursor-pointer md:grayscale object-contain ${ activeClass === i ? 'grayscale-0 md:hover:grayscale-0' : 'grayscale' }`}
									style={{
										transform: `translateX(-${ translateX }px) ${ activeClass === i ? 'scale(1)' : 'scale(0.5)' }`, 
										transition: 'transform .5s ease-in-out'
									}} 
								/>
							);
						})}
					</ul>
				</div>
				<div className='relative'>
					<div className='flex gap-2 absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
						<button onClick={handleNextButton} className='w-10 h-10 bg-[#eaeae9] rounded-full'>{'<'}</button>
						<button onClick={handlePrevButton} className='w-10 h-10 bg-[#eaeae9] rounded-full'>{'>'}</button>
					</div>
				</div>
			</PageContent>

		</main>
	);
};

export default IllustrationsPage;