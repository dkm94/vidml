import { PageContent, PageHeader } from '@/components';
import { introduction } from '@/constants';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<main className='about flex flex-col gap-2'>
			<PageHeader title='About me'/>
			<PageContent>
				<div className={'bg-about-bg content-bg'} aria-hidden="true" />
				<div className='relative flex flex-col md:flex-row max-w-[1175px] m-auto gap-4'>
					<div className='md:w-1/2'>
						<div className='border-solid border-white border flex justify-center p-5'>
							<Image src={'/assets/portrait.jpg'} alt="portrait" width={300} height={200} className='w-full h-auto object-cover max-h-[500px]' />
						</div>
					</div>
					<div className='relative md:w-1/2'>
						<div className='absolute bg-white opacity-50 w-full h-full' aria-hidden="true"/>
						<div className='relative px-10 py-16 flex flex-col gap-6'>
							<h2 className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>Who am I ?</h2>
							{introduction.map((text, index) => <p key={index}>{text}</p>)}
						</div>
					</div>
				</div>
			</PageContent>
		</main>
	);
};

export default AboutPage;