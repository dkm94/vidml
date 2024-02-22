'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IllustrationPageProps {
	params: {
		imageName: string;
	};
}

export default function IllustrationPage (props: IllustrationPageProps) {
	console.log('🚀 ~ :', props);
	const { imageName } = props.params;
	const router = useRouter();

	useEffect(() => {
		router.prefetch(`/illustrations/${ imageName }`);
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <p>imageName</p>;
};