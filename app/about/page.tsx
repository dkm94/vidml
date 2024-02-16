import Image from 'next/image';
import { Divider } from '@mui/material';

import { PageContent, PageHeader } from '@/components';

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
						<div className='flex justify-center'>
							<div className='w-max h-fit max-w-xs border-solid border-white border flex justify-center p-5'>
								<Image src={'/assets/about-me.jpg'} alt="portrait" width={300} height={200} className='w-full h-auto object-cover max-h-[500px]' />
							</div>
						</div>
						<div className='relative flex items-center'>
							<div className='absolute bg-white opacity-50 w-full h-full' aria-hidden="true"/>
							<div className='relative px-10 py-16 flex flex-col gap-6'>
								<p className='text-pretty'>{'Artiste autodidacte originaire de la région parisienne, de par mes origines modestes, je n\'ai jamais fréquenté d\'école d\'art ni suivi de cours formels. Ma passion pour l\'illustration et la mode a été le moteur de mon apprentissage, façonné par une persévérance inébranlable et des expériences enrichissantes avec des entreprises qui ont eu confiance en mon talent.'}</p>
								<p>{'Mon parcours témoigne de mon dévouement envers mon art, résultant non seulement de ma créativité innée, mais également des opportunités que des collaborations professionnelles ont apportées. Je vous remercie sincèrement de visiter ma galerie et de partager cette aventure avec moi.'}</p>
								<p>{'Prenez soin de vous,'}</p>
								<p className='text-end'>{'Virgine DML'}</p>
							</div>
						</div>
					</div>
				</div>
			</PageContent>
		</main>
	);
};

export default AboutPage;