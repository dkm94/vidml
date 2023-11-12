import type { Config } from 'tailwindcss';

const config: Config = {
	important: true,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	safelist: [
		'animate-[fade-in-up_1s_ease-in-out]',
		'animate-[fade-out-down_1s_ease-in-out]'
	],
	theme: {
		extend: {
			colors: {
				vlBeige: '#FFFDFB',
				black: '#212121' 
			},
			backgroundImage: {
				'default': 'url("/assets/background.jpg")',
				'illustrations-bg': 'url("/assets/bg-2.jpg")',
				'services-bg': 'url("/assets/bg-1.jpg")',
				'about-bg': 'url("/assets/bg-3.jpg")',
				'contact-bg': 'url("/assets/bg-4.jpg")',
				'header-bg': 'url("/assets/section-bg.png")' 
			},
			fontFamily: {
				cardo: [ 'var(--font-cardo)' ],
				inria: [ 'var(--font-inria)' ],
				bebasNeue: [ 'var(--font-bebasNeue)' ] 
			}
		}, 
	},
	plugins: [
		require('tw-elements/dist/plugin.cjs')
	],
};
export default config;
