import React from 'react';
import { Link } from 'react-router-dom';

import shoppingBag from '../assets/img/shopping_bag-24px.svg';
import person from '../assets/img/person-24px.svg';
// import skater from '../assets/img/skater-1.jpg';

const Navbar = () => {
	return (
		<nav class='flex items-center justify-between flex-wrap bg-gray-900 p-4 flex-row'>
			<div className='text-red-600'>
				<h3 className='font-logo text-2xl'>
					Surf<span className='text-white'>-n-</span>Turf
				</h3>
			</div>
			{/* Middle Nav */}
			<div>
				<ul className='text-white flex flex-row'>
					<li className='pr-4'>
						<Link to='/apparel'>Apparel</Link>
					</li>
					<li className='pr-4'>
						<Link to='/accessories'>Accessories</Link>
					</li>
					<li className='pr-4'>
						<Link to='/skateboards'>Skateboards</Link>
					</li>
				</ul>
			</div>
			{/* Right Nav */}
			<div>
				<ul className='flex flex-row'>
					<li>
						<Link to='/cart'>
							<img src={shoppingBag} alt='shopping bag icon' />
						</Link>
					</li>
					<li>
						<Link to='/dashboard'>
							<img src={person} alt='user icon' />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
