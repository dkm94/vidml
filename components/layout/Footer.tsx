'use client';
import { useContext } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { SocialButton } from '../buttons';
import { WindowWidthContext } from '@/app/layout';

const Footer = () => {

	const windowWidthContext = useContext(WindowWidthContext);
	const isNotLarge = windowWidthContext?.isNotLarge ?? false;
	
	return (
		<footer className='footer flex justify-center mt-2'>
			<div className='md:flex md:flex-row md:relative pl-12 pr-12 max-w-[1170px] w-full mt-4'>
				{isNotLarge && <div className='text-center text-red-50 py-4 flex flex-row md:flex-row gap-4'>
					<span className='uppercase text-nowrap md:self-center md:text-xs self-center'>contactez-moi</span>
					<div className='flex flex-wrap gap-2 justify-center w-full'>
						<SocialButton path='https://www.instagram.com/vidml.illustration/' icon={<InstagramIcon />} />
						<SocialButton path='mailto:vidml@gmail.com' icon={<MailOutlineIcon />} />
					</div>
					{/* <div className='flex justify-center md:hidden'><hr className='bg-orange-50 mt-2 w-[205px]' /></div> */}
				</div>}
			
				<div className='text-center text-red-50 py-4 ml-auto mr-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
					<span className='text-xs font-semibold'>Copyright © 2023 </span><a className='text-xs font-semibold' target="_blank" href="https://github.com/dkm94">DKM</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;