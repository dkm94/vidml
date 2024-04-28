import { Metadata } from 'next';
import { bebasNeue } from '@/app/fonts';

import { Divider } from '@mui/material'; 

import { PageContent, PageHeader } from '@/components';

export const metadata: Metadata = { title: 'Services' };

function ServicesPage(){
	return (
		<main className='services h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Services'/>
			<Divider className='h-2 bg-white min-[815px]:h-[1px]' />
			<PageContent>
				{/* <div className='text-slate-100 flex flex-col gap-5 min-[815px]:px-16'>
					<h2 className='text-balance'>Des services sur mesure pour vous aider à réaliser le projet de vos rêves</h2>
				</div> */}
				<section className='flex flex-col gap-10 max-w-4xl w-full mt-18 text-slate-100 border border-x-slate-50 border-solid'>
					<div className={`services-header text-center pt-8 pb-8 bg-slate-50 text-black text-2xl ${ bebasNeue.className }`}>Tarifs*</div>
					<div className='grid grid-cols-3'>
						<div />
						<div className='services-content flex flex-col items-center gap-5'>
							<h3 className='underline underline-offset-4'>Particuliers</h3>
							<div className='flex flex-col'>
								<span className='font-bold'>Dessin simple</span>
								<span>De 100 à 200 euros</span>
							</div>
							<div className='flex flex-col'>
								<span className='font-bold'>Dessin création</span>
								<span>De 150 à 300 euros</span>
							</div>
						</div>
						<div />
					</div>
					<Divider className='h-2 bg-white min-[815px]:h-[0.5px]'/>
					<div className='services-content flex flex-col gap-5'>
						<h3 className='underline underline-offset-4'>Entreprises / Marques</h3>
						<div className='grid grid-cols-1 gap-32'>
							<div className='ml-auto mr-auto flex flex-col gap-5'>
								<div className='flex flex-col'>
									<span className='font-bold'>Dessin simple</span>
									<span>De 200 à 400 euros</span>
								</div>
								<div className='flex flex-col'>
									<span className='font-bold'>Dessin création</span>
									<span>De 300 à 600 euros</span>
								</div>
							</div>
							<div className='ml-auto mr-auto'>
								<span className='font-bold'>Droits d'utilisation</span>
								<div className='flex flex-col'>
									<span>Site web: 1000 euros (1 an)</span>
									<span>Catalogue: 300 euros (1 mois)</span>
								</div>
							</div>
						</div>
					</div>
					<Divider className='h-2 bg-white min-[815px]:h-[0.5px]'/>
					<div className='services-content flex flex-col gap-5'>
						<h3 className='underline underline-offset-4'>Magazines / Sites WEB</h3>
						<div className='grid grid-cols-2 gap-32'>
							<div className='ml-auto flex flex-col gap-5'>
								<div className='flex flex-col'>
									<span className='font-bold'>Dessin simple</span>
									<span>De 300 à 400 euros</span>
								</div>
								<div className='flex flex-col'>
									<span className='font-bold'>Dessin création</span>
									<span>De 400 à 900 euros</span>
								</div>
							</div>
							<div>
								<span className='font-bold'>Droits d'utilisation</span>
								<div className='flex flex-col'>
									<span>Site web: 1000 euros (1 an)</span>
									<span>Catalogue: 300 euros (1 mois)</span>
								</div>
							</div>
						</div>
					</div>
					<div className='services-footer flex flex-col text-center pt-8 pb-8 bg-slate-50 text-black'>
						<span>* Les tarifs sont à titre indicatif.</span>
						<span>Une devis sera réalisé à chaque demande spécifique du client.</span>
					</div>
				</section>
			</PageContent>
		</main>
	);
}

export default ServicesPage;