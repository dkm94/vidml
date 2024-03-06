/** @type {import('next').NextConfig} */
const nextConfig = {
	// formats: [ 'image/avif', 'image/webp' ],
	// remotePatterns: [
	// 	{
	// 		protocol: 'https',
	// 		hostname: 'res.cloudinary.com',
	// 		port: '',
	// 		pathname: '/dbj8kfftk/**',
	// 	},
	// ],
	images: 
    {
    	domains: 
        [ 'localhost', 'res.cloudinary.com', 'picsum.photos', 'images.pexels.com' ], 
    },
	webpack: (config) => {
		config.resolve = {
			...config.resolve,
			fallback: { fs: false, },
		};
		return config;
	},
};

module.exports = nextConfig;
