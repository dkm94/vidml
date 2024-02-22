'use client';

import { useEffect } from 'react' ;
import { useRouter } from 'next/navigation';

export default function IllustrationsPage(props: { imageName: string }) {
	const { imageName } = props;
	const router = useRouter();
	
	useEffect(() => {
		router.push(`/illustrations/${ imageName }`);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};