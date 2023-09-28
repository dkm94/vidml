import { Bebas_Neue, Cardo, Inria_Serif } from 'next/font/google';

export const bebasNeue = Bebas_Neue({
	subsets: [ 'latin' ],
	weight: '400',
	display: 'swap',
	variable: '--font-bebasNeue'
});

export const cardo = Cardo({
	subsets: [ 'latin' ],
	weight: [ '400', '700' ],
	display: 'swap',
	variable: '--font-cardo'
});

export const inria = Inria_Serif({
	subsets: [ 'latin' ],
	weight: [ '300' ],
	display: 'swap',
	variable: '--font-inria'
});