/** @format */
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = (porps) => {
	return (
		<div className='nav-container'>
			<h1 className='title'>Khan_coder</h1>
			<ul className='nav-elements'>
				<Link to='/fahadsPortfolio' className='link'>
					<li>Home</li>
				</Link>
				<Link to='/experience' className='link'>
					<li>Experience</li>
				</Link>
				<Link to='/projects' className='link'>
					<li>Projects</li>
				</Link>
				<Link to='/skils' className='link'>
					<li>Skills</li>
				</Link>
			</ul>
		</div>
	);
};

export default Nav;
