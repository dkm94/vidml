'use client';

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';

import { CloudinaryResource } from '@/utils/api/cachedImages';
import { CarouselButton, CloudinaryImg } from '..';
import { NotFound } from '../layout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carousel = ({ resources }: { resources: any }) => {
	const { imageName } = useParams();
	const images = resources;
	const arrayOfIds = Array.isArray(images) && images.map(({ filename }) => filename);
	const imageRef: MutableRefObject<HTMLImageElement | null> = useRef(null);
	
	const [ gallery, setGallery ] = useState<CloudinaryResource[]>([]);
	const [ activeClass, setActiveClass ] = useState<number>(0);
	const [ translateX, setTranslateX ] = useState<number | undefined>(0);
	const [ imageWidth, setImageWidth ] = useState<number | null>(null); // Issue: ca fait planter le carousel car la valeur par défaut est 0
	console.log("🚀 ~ Carousel ~ imageWidth:", imageWidth)
	const [ imageLoaded, setImageLoaded ] = useState<boolean>(false); 

	function isValidPublicId(publicId: string) {
		if(Array.isArray(arrayOfIds)){
			return arrayOfIds.includes(publicId);
		}
	}
	
	useEffect(() => setGallery(images), [ images ]);

	useEffect(() => {
        // Vérifiez si imageWidth est mis à jour (différent de null) et mettez à jour l'état imageLoaded en conséquence
        if (imageWidth !== null) {
            setImageLoaded(true);
        }
    }, []);
	const imageOpacityClass = imageLoaded ? 'image-visible' : 'image-hidden';

	// useEffect(() => {
	// 	if(!imageName){
	// 		router.push(`/illustrations/${ images?.[ activeClass ]?.filename }`);
	// 		return;
	// 	} else {
	// 		router.push(`/illustrations/${ imageName }`);
	// 	}
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [ imageName ]);
	
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
	// 	if(imageWidth){
	// 		const getItem = (element: string) => element === imageName;
	// 		const index: number = Array.isArray(arrayOfIds) ? arrayOfIds.findIndex(getItem) : -1;
	// 		setTranslateX(imageWidth! * index);
	// 		setActiveClass(index);
	// 	}
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [ imageName, imageWidth ]);
	
	const handlePrevButton = (): void => {
		if (activeClass === 0) {
			setActiveClass(gallery.length - 1);
		} else {
			setActiveClass(activeClass - 1);
		}
		setTranslateX(translateX! - imageWidth!);
		// router.push(images[ activeClass - 1 ].filename);
	};

	const handleNextButton = (): void => {
		if (activeClass === gallery.length - 1) {
			setActiveClass(0);
		} else {
			setActiveClass(activeClass + 1);
		}
		setTranslateX(translateX! + imageWidth!);
		// router.push(images[ activeClass + 1 ].filename);
	};

	if(typeof imageName === 'string'){
		if(!isValidPublicId(imageName)){
			return <NotFound />;
		}
	}

	return (	
		<div className={`${imageWidth ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease-in-out' }}>
			<div className='w-full h-full flex justify-center'>
				<ul className={`flex flex-row`} style={{
					height: imageWidth as number,
					width: imageWidth as number,
					maxWidth: 400
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
										maxWidth: 'unset',
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
		</div>
	);
};

export default Carousel;