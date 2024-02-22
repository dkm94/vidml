import { CloudinaryImg } from '@/components';

interface IllustrationPageProps {
	params: { imageName: string };
}

export default function IllustrationPage (props: IllustrationPageProps) {
	console.log('🚀 ~ IllustrationPage ~ props component ID:', props);
	const { imageName } = props.params;
	return <CloudinaryImg 
		alt={imageName} 
		src={`vidml/${ imageName }`}
		// className={`carousel-img md:grayscale object-contain ${ activeClass === i ? 'grayscale-0 md:hover:grayscale-0 current-img' : 'grayscale' }`}
		// style={{
		// 	transform: `translateX(-${ translateX }px) ${ activeClass === i ? 'scale(1)' : 'scale(0.5)' }`, 
		// 	transition: 'transform .5s ease-in-out',
		// 	maxWidth: 'unset'
		// }} 
	/>;
};
// CldImage avec l'aide d'une fonction fetch;