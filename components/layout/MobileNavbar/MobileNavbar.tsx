'use client';

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';

import './MobileNavbar.css';

const MobileNavbar = () => {

	const [ showLinks, setShowLinks ] = useState<boolean>(false);

	const handleShowLinks = (): void => {
		setShowLinks(!showLinks);
	};

	return (
		<nav className={`navbar ${ showLinks && 'show_nav'}`}>
			<button className="w-5 h-3 bg-transparent md:hidden border-none block z-[1000] cursor-pointer" onClick={handleShowLinks}>
				<span className="burger_bar"></span>
			</button>
			<div
				className="cursor-pointer h-full ml-auto mr-auto p-4"
				onClick={() => {
					window.location.pathname = '/';
				}}
			>
				<Image src='/assets/logo.png' height={50} width={120} alt='logo' className='h-full' />

			</div>
			<ul className="navbar__links">
				<li className="navbar__item block md:hidden slideDown-1">
					<Link
						className="px-[5px] text-gray-50 no-underline block p-4 bg-inherit uppercase text-[5vw]"
						href="/"
						onClick={() => setShowLinks(!showLinks)}
					>
            Home
					</Link>
				</li>
				<li className="navbar__item block md:hidden slideDown-1">
					<Link
						className="px-[5px] text-gray-50 no-underline block p-4 bg-inherit uppercase text-[5vw]"
						href="/illustrations"
						onClick={() => setShowLinks(!showLinks)}
					>
            Illustrations
					</Link>
				</li>
				<li className="navbar__item block md:hidden slideDown-1">
					<Link
						className="px-[5px] text-gray-50 no-underline block p-4 bg-inherit uppercase text-[5vw]"
						href="/archives"
						onClick={() => setShowLinks(!showLinks)}
					>
            Archives
					</Link>
				</li>
				<li className="navbar__item block md:hidden slideDown-1">
					<Link
						className="px-[5px] text-gray-50 no-underline block p-4 bg-inherit uppercase text-[5vw]"
						href="/services"
						onClick={() => setShowLinks(!showLinks)}
					>
            Services
					</Link>
				</li>
				<li className="navbar__item block md:hidden slideDown-1">
					<Link
						className="px-[5px] text-gray-50 no-underline block p-4 bg-inherit uppercase text-[5vw]"
						href="/about"
						onClick={() => setShowLinks(!showLinks)}
					>
            About me
					</Link>
				</li>
				<li className="navbar__item block md:hidden slideDown-1">
					<source />
					<Link
						className="px-[5px] text-gray-50 no-underline block p-4 bg-inherit uppercase text-[5vw]"
						href="/contact"
						onClick={() => setShowLinks(!showLinks)}
					>
            Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MobileNavbar;
