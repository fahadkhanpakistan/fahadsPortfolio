/** @format */
import './Home.css';
import dp from '../../images/DP.jpg';
import { useSpring, animated } from 'react-spring';
const Home = (props) => {
	const swapRight = useSpring({
		from: {
			opacity: 0,
			transform: 'translateX(-50%)',
		},
		to: {
			opacity: 1,
			transform: 'translateX(0%)',
		},
	});
	const swapLeft = useSpring({
		from: {
			opacity: 0,
			transform: 'translateX(50%)',
		},
		to: {
			opacity: 1,
			transform: 'translateX(0%)',
		},
	});
	return (
		<section className='home-container'>
			<animated.img src={dp} alt="Fahad's Profile Pictute!" className='dp' style={swapRight} />
			<animated.div className='home-info' style={swapLeft}>
				<h1 className='home-info-title'>Fahad Khan</h1>
				<p className='home-info-subtitle'>
					<b className='bold'>MERN</b> Stack Developer
				</p>
				<p>
					Graduate from <b className='bold'>Computer Science</b> 2021
				</p>
				<button className='cv-btn'>Download CV</button>
			</animated.div>
		</section>
	);
};

export default Home;
