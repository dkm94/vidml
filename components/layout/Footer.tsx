'use client';

import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IconButton } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='footer flex justify-center mt-2'>
			<div className='md:flex md:flex-row md:relative pl-12 pr-12 max-w-[1170px] w-full mt-4'>
				<div className='text-center text-red-50 py-4 flex flex-row md:flex-row gap-4'>
					<span className='uppercase text-nowrap md:self-center md:text-xs self-center'>contactez-moi</span>
					<div className='flex flex-wrap gap-2 justify-center w-full'>
						<Link href='https://www.instagram.com/vidml.illustration/' target="_blank">
							<IconButton className='md:h-[24px] md:w-[24px] md:p-4' style={{ backgroundColor: '#FFFDFB' }} >
								<InstagramIcon />
							</IconButton>
						</Link>
						<Link href='mailto:vidml@gmail.com' target="_blank">
							<IconButton className='md:h-[24px] md:w-[24px] md:p-4' style={{ backgroundColor: '#FFFDFB' }} >
								<MailOutlineIcon />
							</IconButton>
						</Link>
					</div>
					{/* <div className='flex justify-center md:hidden'><hr className='bg-orange-50 mt-2 w-[205px]' /></div> */}
				</div>
			
				<div className='text-center text-red-50 py-4 ml-auto mr-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
					<span className='text-xs font-semibold'>Copyright © 2023 </span><a className='text-xs font-semibold' target="_blank" href="https://github.com/dkm94">DKM</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;