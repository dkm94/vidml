import { ISocialButtonProps } from '@/types';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

const SocialButton: FC<ISocialButtonProps> = ({ path, icon }) => {
	return (
		<Link href={path} target="_blank">
			<IconButton className='md:h-[24px] md:w-[24px] md:p-4' style={{ backgroundColor: '#FFFDFB' }} >
				{icon}
			</IconButton>
		</Link>
	);
};

export default SocialButton;