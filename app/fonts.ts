import { Bebas_Neue, Cardo } from 'next/font/google';

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