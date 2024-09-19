import { Metadata } from 'next';

import { Divider } from '@mui/material';
import { PageContent, PageHeader } from '@/components';
import Image from 'next/image';

export const metadata: Metadata = { title: 'À propos' };

const AboutPage = () => {
	return (
		<main className='h-full about flex flex-col bg-[#09080B]'>
			<PageHeader title='À propos'/>
			<Divider className='h-2 bg-white min-[815px]:h-[1px]'/>
			<PageContent>
				<div className='text-slate-100 md:px-16 flex flex-col gap-5'>
					<h2 className='text-balance'>{'« Une oeuvre d\'art, c\'est le moyen d\'une âme »'}</h2>
					<h3>Maurice Barrès</h3>
				</div>
				<div className='flex justify-center'>
					<div className='flex flex-col px-16 min-[1200px]:flex-row max-w-[1175px] mt-14 md:mt-24 gap-4'>
						<div className='relative flex items-center'>
							<div className='absolute bg-white opacity-50 w-full h-full' aria-hidden="true"/>
							<div className='relative px-10 pt-16 pb-8 flex flex-col gap-6 text-sm'>
								<p className='text-pretty'>{'C\'est avec un grand plaisir que je vous accueille sur ma galerie.'}</p>
								<p>{'Je m\'appelle Virginie, j\'ai grandi dans la région parisienne. Originaire d\'une famille modeste, je n\'ai jamais été en école d\'art ni pris de cours. Je suis une autodidacte, passionnée de création et de mode depuis toujours. J\'ai appris à force de persévérance, mais aussi d\'expériences grâce à des entreprises qui m\'ont fait confiance.'}</p>
								<p>{'Merci pour votre visite. Prenez soin de vous ✨'}</p>
								<div className='flex w-full justify-end'>
									<Image src='/assets/signature.png' alt='signature' width={200} height={100} className='h-14 md:h-22'/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PageContent>
		</main>
	);
};

export default AboutPage;