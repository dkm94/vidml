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
};

const MobileNavbar: FC<MobileNavbarProps> = ({ handleShowLinks, showLinks, path }) => {
	
	return (
		<nav className='navigation'>
			<div className={`navbar ${ showLinks ? 'show_nav' : '' }`}>
				<button className={`${ path === '/' ? 'hidden' : '' } w-5 h-3 bg-transparent lg:hidden border-none block z-[1000] cursor-pointer`} onClick={handleShowLinks}>
					<span className="burger_bar"></span>
				</button>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink key={1} title={navlinks[ 1 ].title} path={navlinks[ 1 ].path} setShowLinks={handleShowLinks} />
				</div>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink key={2} title={navlinks[ 2 ].title} path={navlinks[ 2 ].path} setShowLinks={handleShowLinks} />
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
					<Navlink key={3} title={navlinks[ 3 ].title} path={navlinks[ 3 ].path} setShowLinks={handleShowLinks} />
				</div>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink key={4} title={navlinks[ 4 ].title} path={navlinks[ 4 ].path} setShowLinks={handleShowLinks} />
				</div>
				<ul className="navbar__links bg-gray-400 bg-opacity-70 flex lg:hidden">
					{/* <button className='absolute text-slate-50 translate-y-[-50%] translate-x-[-50%] square-title text-2xl top-[95%] left-1/2 text-shadow' onClick={handleShowLinks}>Exit</button> */}

					{navlinks.map((link: NavLink, index: number): ReactNode => {
						return <Navlink key={index} title={link.title} path={link.path} setShowLinks={handleShowLinks} />;
					})}
				</ul>
			</div>
		</nav>
	);
};

export default MobileNavbar;
