'use client';

import React, { ReactNode, useState } from 'react';
// import { Link } from 'react-router-dom';
import Image from 'next/image';
import { navlinks } from '@/constants';

import './MobileNavbar.css';
import Navlink from '@/components/Navlink';
import { NavLink } from '@/types';

const MobileNavbar = () => {

	const [ showLinks, setShowLinks ] = useState<boolean>(false);

	const handleShowLinks = (): void => {
		setShowLinks(!showLinks);
	};
	
	return (
		<nav className='navigation lg:border-b lg:border-slate-900'>
			<div className={`navbar ${ showLinks ? 'show_nav' : '' }`}>
				<button className="w-5 h-3 bg-transparent lg:hidden border-none block z-[1000] cursor-pointer" onClick={handleShowLinks}>
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
					{navlinks.map((link: NavLink, index: number): ReactNode => {
						return <Navlink key={index} title={link.title} path={link.path} setShowLinks={setShowLinks} showLinks={showLinks} />;
					})}
				</ul>
			</div>
		</nav>
	);
};

export default MobileNavbar;
