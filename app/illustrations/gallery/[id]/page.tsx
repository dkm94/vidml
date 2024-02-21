import React from 'react';

import { ImagesList, PageContent, PageHeader } from '@/components';
import { Divider } from '@mui/material';

interface GalleryPageProps {
    params: {
        id: number | string
    }
}

const GalleryPage = (props: GalleryPageProps) => {
	return (
		<main className='gallery h-full flex flex-col bg-[#09080B]'>
			<PageHeader title='Gallery'/>
			<Divider className='h-2 bg-white min-[815px]:h-[1px]'/>
			<PageContent>
				<ImagesList params={props.params} />
			</PageContent>
		</main>
	);
};
export default GalleryPage;