/** @format */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css';
const Nav = (porps) => {
	const [linksHidden, setLinksHidden] = useState(true);
	const toggleLinks = (e) => {
		setLinksHidden(!linksHidden);
	};
	return (
		<div className='nav-container'>
			<h1 className='title'>Khan_coder</h1>
			<ul className={`nav-elements ${linksHidden ? 'hide' : ''}`}>
				<Link to='/fahadsPortfolio' className='link'>
					<li>Home</li>
				</Link>
				<Link to='/experience' className='link'>
					<li>Experience</li>
				</Link>
				<Link to='/projects' className='link'>
					<li>Projects</li>
				</Link>
				<Link to='/skills' className='link'>
					<li>Skills</li>
				</Link>
			</ul>
			<div className='burger' onClick={toggleLinks}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Nav;
