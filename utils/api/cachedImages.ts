/* eslint-disable @typescript-eslint/no-explicit-any */
import cloudinary from '../cloudinary';

export type CloudinaryResource = {
	public_id: string;
	filename: string;
}

let cachedResults: any;

export default async function getResults() {
	if (!cachedResults) {
		const fetchedResults = (await cloudinary.v2.search
			.expression(`folder:${ process.env.CLOUDINARY_FOLDER }/*`)
			.sort_by('public_id', 'desc')
			.max_results(20)
			.execute()) as { resources: CloudinaryResource[]};

		cachedResults = fetchedResults;
	}
	return cachedResults;
}
