'use client';

import './MobileNavbar.css';

import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

import { navlinks } from '@/constants';
import { NavLink } from '@/types';
import Navlink from '@/components/Navlink';


interface MobileNavbarProps {
	handleShowLinks: () => void;
	showLinks: boolean;
	path: string;
	setShowLinks: (showLinks: boolean) => void;
};

const MobileNavbar: FC<MobileNavbarProps> = ({ handleShowLinks, showLinks, setShowLinks, path }) => {
	
	return (
		<nav className='navigation'>
			<div className={`navbar ${ showLinks ? 'show_nav' : '' }`}>
				<button className={`${ path === '/' ? 'hidden' : '' } w-5 h-3 bg-transparent lg:hidden border-none block z-[1000] cursor-pointer`} onClick={handleShowLinks}>
					<span className="burger_bar"></span>
				</button>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink key={1} title={navlinks[ 1 ].title} path={navlinks[ 1 ].path} setShowLinks={setShowLinks} showLinks={showLinks} />
				</div>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink key={2} title={navlinks[ 2 ].title} path={navlinks[ 2 ].path} setShowLinks={setShowLinks} showLinks={showLinks} />
				</div>
				<div
					className="cursor-pointer h-full ml-auto mr-auto p-4"
					onClick={() => {
						window.location.pathname = '/';
					}}
				>
					<Image src='/assets/logo.png' height={50} width={120} alt='logo' className='h-full object-contain' />
				</div>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink key={3} title={navlinks[ 3 ].title} path={navlinks[ 3 ].path} setShowLinks={setShowLinks} showLinks={showLinks} />
				</div>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink key={4} title={navlinks[ 4 ].title} path={navlinks[ 4 ].path} setShowLinks={setShowLinks} showLinks={showLinks} />
				</div>
				<ul className="navbar__links flex lg:hidden">
					{/* <button className='top-6 absolute right-8' onClick={handleShowLinks}>Close</button> */}

					{navlinks.map((link: NavLink, index: number): ReactNode => {
						return <Navlink key={index} title={link.title} path={link.path} setShowLinks={setShowLinks} showLinks={showLinks} />;
					})}
				</ul>
			</div>
		</nav>
	);
};

export default MobileNavbar;
