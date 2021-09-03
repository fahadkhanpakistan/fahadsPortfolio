/** @format */
import './Experience.css';
import { useSpring, animated } from 'react-spring';
// ------icons-------
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import {
	SiJavascript,
	SiReact,
	SiSass,
	SiMaterialUi,
	SiRedux,
	SiReactrouter,
	SiNodeDotJs,
	SiMongodb,
	SiGithub,
	SiFigma,
} from 'react-icons/si';

const Experience = (props) => {
	const swapping = useSpring({
		from: { opacity: 0, transform: 'translateY(100%)' },
		to: {
			opacity: 1,
			transform: 'translateY(0%)',
		},
	});
	const delay = useSpring({
		delay: 120,
		from: {
			pacity: 0,
			transform: 'translateY(100%)',
		},
		to: {
			opacity: 1,
			transform: 'translateY(0%)',
		},
	});

	return (
		<animated.section className='experience-container' style={swapping}>
			<h1 className='exp-title'>Experience</h1>
			<div className='exp-sub-container'>
				<div className='techs'>
					<h2>Technologies</h2>
					<div className='icon-container'>
						<ImHtmlFive className='icon' />
						<ImCss3 className='icon' />
						<SiJavascript className='icon' />
						<SiReact className='icon' />
						<SiSass className='icon' />
						<SiMaterialUi className='icon' />
						<SiRedux className='icon' />
						<SiReactrouter className='icon' />
						<SiNodeDotJs className='icon' />
						<SiMongodb className='icon' />
						<SiGithub className='icon' />
						<SiFigma className='icon' />
					</div>
				</div>
				<animated.div className='experience-info' style={delay}>
					<p>
						Having <b className='bold'>2+ years</b> of expereience in Web Developement, I had worked
						on various techs and learnt how to embbed different technologies for single
						responsibility.
					</p>
					<p>
						By the help of <b className='bold'>JavaScript</b>, I had understood how to deal with
						other Technologies which can be embbed.
					</p>
					<p>
						<b className='bold'>Web Develpement</b> made me passionate,
						<b className='bold'>Nature</b> made me curios and
						<b className='bold'> Life</b> made me rock hard.
					</p>
				</animated.div>
			</div>
		</animated.section>
	);
};

export default Experience;
