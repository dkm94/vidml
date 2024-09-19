import { FC } from 'react';
import { IAudioButtonProps } from '@/types';

import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const AudioButton: FC<IAudioButtonProps> = ({ isMuted, handleToggleMute }) => {
	return (
		<div>
			{isMuted ? 
				(
					<div>
						<IconButton onClick={handleToggleMute} className='md:h-[24px] md:w-[24px] md:p-4' style={{ backgroundColor: '#FFFDFB' }} >
							{<PlayArrowIcon />}
						</IconButton>
						{/* Activer le son */}
					</div>
				): 
				(
					<div>
						<IconButton onClick={handleToggleMute} className='md:h-[24px] md:w-[24px] md:p-4' style={{ backgroundColor: '#FFFDFB' }} >
							{<PauseIcon />}
						</IconButton>
						{/* Désactiver le son */}
					</div>
				)}
			{/* <IconButton className='md:h-[24px] md:w-[24px] md:p-4' style={{ backgroundColor: '#FFFDFB' }} >
				{icon}
			</IconButton> */}
		</div>
	);
};

export default AudioButton;