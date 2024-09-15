'use client';
import React, { FC, useEffect, useRef } from 'react';

interface VideoProps {
  src: string;
}

const Video: FC<VideoProps> = ({ src }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	// const [ isMuted, setIsMuted ] = useState(true);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch((error: any) => {
				console.error('La lecture automatique de la vidéo a été empêchée', error);
			});
		}
	}, []);

	// const handleToggleMute = () => {
	// 	// Inversion de l'état du mute
	// 	setIsMuted(!isMuted);
	// };

	return (
		<>
			<video
				ref={videoRef}
				src={src}
				autoPlay
				loop
				playsInline
				muted
				className="h-[100%] object-cover w-full"
			>
				<p className="text-white">Your browser doesn’t support HTML5 video.</p>
			</video>
			{/* 
			<audio ref={audioRef} src={'/assets/music_theme/Soon_Hicham_Chahidi.mp3'} loop />

			<div className="absolute top-0 bg-white/20 hover:bg-white/50 pr-3.5 z-[100] w-[210px]">
				{isMuted ? 
					(
						<div>
							<IconButton onClick={handleToggleMute} className='opacity-5 hover:opacity-100 md:h-[24px] md:w-[24px] md:p-4 mx-3 my-2' style={{ backgroundColor: '#FFFDFB' }} >
								{<PlayArrowIcon />}
							</IconButton>
							Activer le son
						</div>
					): 
					(
						<div>
							<IconButton onClick={handleToggleMute} className='opacity-5 hover:opacity-100 md:h-[24px] md:w-[24px] md:p-4 mx-3 my-2' style={{ backgroundColor: '#FFFDFB' }} >
								{<PauseIcon />}
							</IconButton>
						Désactiver le son
						</div>
					)}
			</div> */}
		</>
	);
};

export default Video;
