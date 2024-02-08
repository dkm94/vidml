import { Illustration } from './../types/index';
import { Gallery, IllustrationType, NavLink } from '@/types';
import { ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
	components: { },
	palette: {},
	typography: {}
};

export const navlinks: NavLink[] = [
	{
		title: 'Accueil',
		path: '/'
	},
	{
		title: 'Illustrations',
		path: '/illustrations'
	},
	{
		title: 'Services',
		path: '/services'
	},
	{
		title: 'À propos',
		path: '/about'
	},
	{
		title: 'Contact',
		path: '/contact'
	}
];

export const galleries: Gallery[] = [
	{
		id: '1',
		title: 'Gallery One',
		images: [
			{
				id: '1',
				title: 'Image One',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '2',
				title: 'Image Two',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '3',
				title: 'Image Three',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '4',
				title: 'Image Four',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
		]
	},
	{
		id: '2',
		title: 'Gallery Two' ,
		images: [
			{
				id: '1',
				title: 'Image One',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '2',
				title: 'Image Two',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '3',
				title: 'Image Three',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '4',
				title: 'Image Four',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
		]
	},
	{
		id: '3',
		title: 'Gallery Three',
		images: [
			{
				id: '1',
				title: 'Image One',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '2',
				title: 'Image Two',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '3',
				title: 'Image Three',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis. ',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '4',
				title: 'Image Four',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Etur adipisicing elit. Itaque amet indis perferendis blanditiis.',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
		]
	},
	{
		id: '4',
		title: 'Gallery Four',
		images: [
			{
				id: '1',
				title: 'Image One',
				description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis.',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '2',
				title: 'Image Two',
				description: 'This is the second image',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '3',
				title: 'Image Three',
				description: 'This is the third image',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
			{
				id: '4',
				title: 'Image Four',
				description: 'This is the fourth image',
				url: 'https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			},
		] 
	},
];

export const introduction: string = "C'est avec un grand plaisir que je vous accueil sur ma galerie . Je m'appel Virginie j'ai grandis dans la région parisiene. Originaire d'une famille modeste je n'ai jamais été en école d'art n'y pris de courts. Je suis une autodidacte, passionné d'illustrations et de mode depuis toujours. J'ai appris à force de persévérance mais aussi d'expériences grâce à des entreprises qui m'ont fait confiance. Merci pour votre visite. Prenez soin de vous.";

export const illustrations: IllustrationType[] = [
	{
		id: 1,
		url: '/assets/gallery/image1.webp'
	},
	{
		id: 2,
		url: '/assets/gallery/image2.webp'
	},
	{
		id: 3,
		url: '/assets/gallery/image3.webp'
	}
];