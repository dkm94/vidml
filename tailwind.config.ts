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
				'background-section-sm': 'url("/assets/background-section/sm.jpg")',
				'background-section-md': 'url("/assets/background-section/md.jpg")',
				'background-section-hd': 'url("/assets/background-section/hd.jpg")',
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
