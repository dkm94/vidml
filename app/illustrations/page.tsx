'use client';

import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { IllustrationType } from '@/types';
import { illustrations } from '@/constants';
import { PageContent, PageHeader } from '@/components';

const IllustrationsPage = () => {
	const imageRef: MutableRefObject<HTMLImageElement | null> = useRef(null);

	const [ gallery, setGallery ] = useState<IllustrationType[]>([]);
	const [ activeClass, setActiveClass ] = useState<number>(0);
	const [ translateX, setTranslateX ] = useState<number | undefined>(0);
	const [ imageWidth, setImageWidth ] = useState<number | null>(null);
	
	const resize = (): void => {
		if (imageRef.current) {
			const width = imageRef.current.offsetWidth;
			setImageWidth(width);
		  }
	};

	// Obtenir la largeur au chargement de l'image
	const handleOnLoad = (): void => resize();

	useEffect(() => {
		// Appeler la fonction initiale pour obtenir la largeur initiale
		resize();
	
		// Ajouter un écouteur d'événements pour redimensionner
		window.addEventListener('resize', resize);
	
		// Nettoyer l'écouteur d'événements lors du démontage du composant
		return () => {
		  window.removeEventListener('resize', resize);
		};
	  }, []);

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

	useEffect(() => {
	  setTranslateX(imageWidth! * activeClass);
	}, [ imageWidth ])
	

	const handlePrevButton = (): void => {
		if (activeClass === 0) {
			setActiveClass(gallery.length - 1);
		} else {
			setActiveClass(activeClass - 1);
		}
		setTranslateX(translateX! - imageWidth!);
	};

	const handleNextButton = (): void => {
		if (activeClass === gallery.length - 1) {
			setActiveClass(0);
		} else {
			setActiveClass(activeClass + 1);
		}
		setTranslateX(translateX! + imageWidth!);
	};

	return (
		<main className='illustrations h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Illustrations' />	
			<PageContent>
				<div className='w-full h-full flex justify-center'>
					<ul className='flex flex-row h-full w-[400px]'>
						{gallery?.map(({ url }, i) => {
							return (
								<Image
									key={i} 
									ref={activeClass === i ? imageRef : null}
									alt="" 
									src={url} 
									height={400} 
									width={400} 
									className={`carousel-img cursor-pointer md:grayscale object-contain ${ activeClass === i ? 'grayscale-0 md:hover:grayscale-0 current-img' : 'grayscale' }`}
									style={{
										transform: `translateX(-${ translateX }px) ${ activeClass === i ? 'scale(1)' : 'scale(0.5)' }`, 
										transition: 'transform .5s ease-in-out'
									}} 
									onLoad={handleOnLoad}
								/>
							);
						})}
					</ul>
				</div>
				<div className='relative'>
					<div className='flex gap-2 absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
						<button disabled={activeClass === 0} onClick={handlePrevButton} className={`w-10 h-10 bg-[#eaeae9] rounded-full ${ activeClass === 0 && 'opacity-50' }`}>{'<'}</button>
						<button disabled={activeClass === gallery.length - 1} onClick={handleNextButton} className={`w-10 h-10 bg-[#eaeae9] rounded-full ${ activeClass === gallery.length - 1 && 'opacity-50' }`}>{'>'}</button>
					</div>
				</div>
			</PageContent>

		</main>
	);
};

export default IllustrationsPage;