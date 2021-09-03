/** @format */
import './Skills.css';
import { useSpring, animated } from 'react-spring';
const Skills = (props) => {
	const swap = useSpring({
		from: { opacity: 0, transform: 'translateY(50%)' },
		to: { opacity: 1, transform: 'translateY(0%)' },
	});
	return (
		<animated.div className='skill-container' style={swap}>
			<h1 className='skills-title'>Skills</h1>
			<div className='meter-container'>
				<div className='meter'>
					<label htmlFor='meter'>HTML</label>
					<progress id='meter' value='8' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>CSS</label>
					<progress id='meter' value='7' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>JavaScript</label>
					<progress id='meter' value='8' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>React</label>
					<progress id='meter' value='8' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>Redux</label>
					<progress id='meter' value='8' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>NodeJS</label>
					<progress id='meter' value='7' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>ExpressJS</label>
					<progress id='meter' value='7' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>MongoDB</label>
					<progress id='meter' value='6' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>SASS</label>
					<progress id='meter' value='8' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>Material UI</label>
					<progress id='meter' value='7' max='10'></progress>
				</div>
				<div className='meter'>
					<label htmlFor='meter'>Git</label>
					<progress id='meter' value='7' max='10'></progress>
				</div>
			</div>
		</animated.div>
	);
};

export default Skills;
