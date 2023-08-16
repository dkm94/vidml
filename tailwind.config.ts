import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				vlBeige: '#FFFDFB',
				black: '#212121' 
			},
			backgroundImage: {
				'illustrations-bg': 'url("/assets/bg-2.jpg")',
				'services-bg': 'url("/assets/bg-1.jpg")',
				'about-bg': 'url("/assets/bg-3.jpg")',
				'contact-bg': 'url("/assets/bg-4.jpg")',
				'header-bg': 'url("/assets/section-bg.png")' 
			},
		}, 
	},
	plugins: [],
};
export default config;
