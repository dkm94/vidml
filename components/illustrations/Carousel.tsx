'use client';

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { CloudinaryResource } from '@/utils/api/cachedImages';
import { CarouselButton, CloudinaryImg } from '..';
import { NotFound } from '../layout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carousel = ({ children }: { children: any }) => {
	const { imageName } = useParams();
	const images = children?.[ 0 ]?.props?.resources;
	const arrayOfIds = Array.isArray(images) && images.map(({ filename }) => filename);
	const imageRef: MutableRefObject<HTMLImageElement | null> = useRef(null);
	
	const router = useRouter();

	const [ gallery, setGallery ] = useState<CloudinaryResource[]>([]);
	const [ activeClass, setActiveClass ] = useState<number>(0);
	const [ translateX, setTranslateX ] = useState<number | undefined>(0);
	console.log('🚀 ~ Carousel ~ translateX:', translateX);
	const [ imageWidth, setImageWidth ] = useState<number | null>(null);

	function isValidPublicId(publicId: string) {
		if(Array.isArray(arrayOfIds)){
			return arrayOfIds.includes(publicId);
		}
	}
	
	useEffect(() => setGallery(images), [ images ]);
	
	// 1. Est-ce que imageName existe ? S'il n'existe pas, rediriger vers la première image
	// 2. Est-ce que imageName est une string ?
	// 3. Est-ce que imageName est un public_id valide ?
	useEffect(() => {
		if(!imageName){
			router.replace(`/illustrations/${ images?.[ activeClass ]?.filename }`);
			return;
		} else {
			router.replace(`/illustrations/${ imageName }`);
		}
	}, [ imageName ]);
	
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

	// useEffect(() => {
	// 	alert("1")
	// 	const images = document.querySelectorAll('img');
	// 	images.forEach((image, i) => {
	// 		image.addEventListener('click', () => setActiveClass(i));
	// 	});

	// 	return () => {
	// 		images.forEach((image, i) => {
	// 			image.removeEventListener('click', () => setActiveClass(i));
	// 		});
	// 	};
	// }, []);

	useEffect(() => {
		if(imageWidth){
			const getItem = (element: string) => element === imageName;
			const index: number = Array.isArray(arrayOfIds) ? arrayOfIds.findIndex(getItem) : -1;
			console.log('🚀 ~ useEffect ~ index:', index);
			setTranslateX(imageWidth! * index);
			setActiveClass(index);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ imageWidth ]);
	

	const handlePrevButton = (): void => {
		if (activeClass === 0) {
			setActiveClass(gallery.length - 1);
		} else {
			setActiveClass(activeClass - 1);
		}
		setTranslateX(translateX! - imageWidth!);
		router.replace(images[ activeClass - 1 ].filename);
	};

	const handleNextButton = (): void => {
		if (activeClass === gallery.length - 1) {
			setActiveClass(0);
		} else {
			setActiveClass(activeClass + 1);
		}
		setTranslateX(translateX! + imageWidth!);
		router.replace(images[ activeClass + 1 ].filename);
	};

	if(typeof imageName === 'string'){
		if(!isValidPublicId(imageName)){
			// Problème index retour et translateX sur le bouton retour
			return <NotFound />;
			// throw new Error('L\'image demandée n\'existe pas. Veuillez vérifier le nom de l\'image.');
		}
	}

	return (
		<>
			<div className='w-full h-full flex justify-center'>
				<ul className='flex flex-row' style={{
					height: imageWidth as number,
					width: imageWidth as number 
				}}>
					{gallery?.map(({ public_id }, i) => {
						return (
						// <Image
						// 	key={i} 
						// 	ref={activeClass === i ? imageRef : null}
						// 	alt="" 
						// 	src={url} 
						// 	height={400} 
						// 	width={400} 
						// 	objectFit="cover"
						// 	className={`carousel-img cursor-pointer md:grayscale object-contain ${ activeClass === i ? 'grayscale-0 md:hover:grayscale-0 current-img' : 'grayscale' }`}
						// 	style={{
						// 		transform: `translateX(-${ translateX }px) ${ activeClass === i ? 'scale(1)' : 'scale(0.5)' }`, 
						// 		transition: 'transform .5s ease-in-out'
						// 	}} 
						// 	onLoad={handleOnLoad}
						// 	placeholder='blur' 
						// 	priority 
						// 	loading='eager' 
						// 	blurDataURL={illustrationBlurURL}
						// />
							<div className='w-fit h-fit' key={public_id} ref={activeClass === i ? imageRef : null}>
								<CloudinaryImg
									onLoad={handleOnLoad}
									src={public_id}
									alt={public_id}
									className={`carousel-img md:grayscale object-contain ${ activeClass === i ? 'grayscale-0 md:hover:grayscale-0 current-img' : 'grayscale' }`}
									style={{
										transform: `translateX(-${ translateX }px) ${ activeClass === i ? 'scale(1)' : 'scale(0.5)' }`, 
										transition: 'transform .5s ease-in-out',
										maxWidth: 'unset'
									}} 
								/>
							</div>
						);
					})}
				</ul>
			</div>
			<div className='relative'>
				<div className='flex gap-2 absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					<CarouselButton 
						disabled={activeClass === 0} 
						onClick={handlePrevButton} 
						className={` ${ activeClass === 0 && 'opacity-50' }`} 
						content={'<'} />
					<CarouselButton 
						disabled={activeClass === gallery?.length - 1} 
						onClick={handleNextButton} 
						className={`${ activeClass === gallery?.length - 1 && 'opacity-50' }`} 
						content={'>'} />
				</div>
			</div>
		</>
	);
};

// Button props: disabled, onClick, className, content

export default Carousel;