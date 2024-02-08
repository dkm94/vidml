import Image from 'next/image';
import { Divider } from '@mui/material';

import { PageContent, PageHeader } from '@/components';
import { introduction } from '@/constants';

const AboutPage = () => {
	return (
		<main className='h-full about flex flex-col bg-[#09080B]'>
			<PageHeader title='À propos'/>
			<Divider style={{
				height: '1px',
				background: '#FFFFFF' 
			}} />
			<PageContent>
				<div className='flex flex-col md:flex-row max-w-[1175px] m-auto gap-4'>
					<div className='md:w-1/2'>
						<div className='border-solid border-white border flex justify-center p-5'>
							<Image src={'/assets/portrait.jpg'} alt="portrait" width={300} height={200} className='w-full h-auto object-cover max-h-[500px]' />
						</div>
					</div>
					<div className='relative md:w-1/2'>
						<div className='absolute bg-white opacity-50 w-full h-full' aria-hidden="true"/>
						<div className='relative px-10 py-16 flex flex-col gap-6'>
							<p>{introduction}</p>
						</div>
					</div>
				</div>
			</PageContent>
		</main>
	);
};

export default AboutPage;