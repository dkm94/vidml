'use client';
import { useContext } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { SocialButton } from '../buttons';
import { WindowWidthContext } from '@/app/layout';

const Footer = () => {

	const windowWidthContext = useContext(WindowWidthContext);
	const isMobile = windowWidthContext?.isMobile ?? false;
	const isTablet = windowWidthContext?.isTablet ?? false;
	const isNotLarge = isMobile || isTablet;
	
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
					<span className='text-xs font-light'>Copyright © 2024 </span>
					<span className='text-xs font-light'>Designed by </span><span className='text-xs font-semibold'>Manag</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;