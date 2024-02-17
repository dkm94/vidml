'use client';

import './MobileNavbar.css';

import React, { FC, ReactNode } from 'react';

import Navlink from '@/components/Navlink';
import { Logo } from '@/components';

import { navlinks } from '@/constants';
import { NavLink, MobileNavbarProps } from '@/types';
import { useWindowWidth } from '@/utils';
import { useShowLinks } from '@/utils/contexts/ShowLinksContext';

const MobileNavbar: FC<MobileNavbarProps> = ({ path }) => {
	const { width } = useWindowWidth();
	const { showLinks, setShowLinks } = useShowLinks();

	const handleToggle = () => {
		setShowLinks(!showLinks);
	  };

	return (
		<nav className='navigation'>
			<div className={`navbar ${ showLinks ? 'show_nav' : '' }`}>
				<button 
					className={`${ path === '/' ? 'hidden' : '' } w-5 h-3 bg-transparent lg:hidden border-none block z-[1000] cursor-pointer`} 
					onClick={handleToggle}>
					<span className="burger_bar"></span>
				</button>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink id={1} title={navlinks[ 1 ].title} path={navlinks[ 1 ].path} setShowLinks={handleToggle} />
				</div>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink id={2} title={navlinks[ 2 ].title} path={navlinks[ 2 ].path} setShowLinks={handleToggle} />
				</div>
				<Logo background="transparent" height='h-full' width='w-fit' windowWidth={width} />
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink id={3} title={navlinks[ 3 ].title} path={navlinks[ 3 ].path} setShowLinks={handleToggle} />
				</div>
				<div className='navlink hidden lg:flex m-auto'>
					<Navlink id={4} title={navlinks[ 4 ].title} path={navlinks[ 4 ].path} setShowLinks={handleToggle} />
				</div>
				<ul className="navbar__links bg-gray-400 bg-opacity-70 flex lg:hidden">
					{navlinks.map((link: NavLink, index: number): ReactNode => {
						return <Navlink key={index} id={index} title={link.title} path={link.path} setShowLinks={handleToggle} />;
					})}
				</ul>
			</div>
		</nav>
	);
};

export default MobileNavbar;
