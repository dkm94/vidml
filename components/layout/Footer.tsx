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
		<footer className='footer flex justify-center mt-[0.1rem]'>
			<div className='sm:flex flex-col sm:flex-row sm:relative pl-12 pr-12 max-w-[1170px] w-full mt-2 mb-2'>
				{isNotLarge && <div className='text-center text-red-50 py-4 flex flex-col sm:flex-row gap-4'>
					<span className='uppercase text-nowrap md:self-center text-xs self-center'>contact</span>
					<div className='flex justify-center sm:hidden'><hr className='bg-orange-50 w-[105px]' /></div>
					<div className='flex flex-wrap gap-2 justify-center w-full'>
						<SocialButton path='https://www.instagram.com/vidml.illustration/' icon={<InstagramIcon />} />
						<SocialButton path='mailto:vidml@gmail.com' icon={<MailOutlineIcon />} />
					</div>
				</div>}
			
				<div className='text-center self-center text-red-50 py-4 sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2'>
					<span className='text-xs font-semibold'>Copyright © 2023 </span><a className='text-xs font-semibold' target="_blank" href="https://github.com/dkm94">DKM</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;