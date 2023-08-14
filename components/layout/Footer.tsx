'use client';

import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IconButton } from '@mui/material';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='flex flex-col items-center py-8'>
				<span className='text-red-50 uppercase'>Contact</span>
				<hr className='bg-orange-50 w-20 mt-2'/>
				<div className='max-w-xs mt-4 flex flex-wrap gap-2'>
					<IconButton style={{ backgroundColor: '#FFFDFB' }} >
						<InstagramIcon />
					</IconButton>
					<IconButton style={{ backgroundColor: '#FFFDFB' }} >
						<MailOutlineIcon />
					</IconButton>
				</div>
			</div>
			<hr className='bg-orange-50 w-full mt-2' />
			<div className='text-center text-red-50 py-4'>
				<span>Copyright 2023 -</span><a target="_blank" href="https://github.com/dkm94">DKM</a>
			</div>
		</footer>
	);
};

export default Footer;