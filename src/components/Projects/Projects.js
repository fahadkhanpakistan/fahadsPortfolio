/** @format */
import { useSpring, animated } from 'react-spring';
import './Projects.css';
const Projects = (props) => {
	return <ProjectView />;
};

export default Projects;
function ProjectView() {
	const swap = useSpring({
		from: { opacity: 0, transform: 'translateY(50%)' },
		to: { opacity: 1, transform: 'translateY(0%)' },
	});
	return (
		<animated.section className='projects-container' style={swap}>
			<h1 className='page-title'>Projects</h1>

			<div className='projects-frame-container'>
				<div className='frame'>
					<iframe
						title='Project'
						src='https://fahadkhanpakistan.github.io/countries-api/'
						width='400px'
						height='400px'
					></iframe>
					<a
						className='ref'
						href='https://fahadkhanpakistan.github.io/countries-api/'
						target='_blank'
						rel='noopener noreferrer'
					>
						View Detail
					</a>
				</div>
				<div className='frame'>
					<iframe
						title='Project'
						src='https://fahadkhanpakistan.github.io/fylo.challenge/'
						width='400px'
						height='400px'
					></iframe>
					<a
						className='ref'
						href='https://fahadkhanpakistan.github.io/fylo.challenge/'
						target='_blank'
						rel='noopener noreferrer'
					>
						View Detail
					</a>
				</div>
				<div className='frame'>
					<iframe
						title='Project'
						src='https://fahadkhanpakistan.github.io/insure-landing-page.challenge/'
						width='400px'
						height='400px'
					></iframe>
					<a
						className='ref'
						href='https://fahadkhanpakistan.github.io/insure-landing-page.challenge/'
						target='_blank'
						rel='noopener noreferrer'
					>
						View Detail
					</a>
				</div>
				<div className='frame'>
					<iframe
						title='Project'
						src='https://fahadkhanpakistan.github.io/project-tracking.challenge/'
						width='400px'
						height='400px'
					></iframe>
					<a
						className='ref'
						href='https://fahadkhanpakistan.github.io/project-tracking.challenge/'
						target='_blank'
						rel='noopener noreferrer'
					>
						View Detail
					</a>
				</div>

				<div className='frame'>
					<iframe
						title='Project'
						src=' https://fahadkhanpakistan.github.io/url-shorten-api/'
						width='400px'
						height='400px'
					></iframe>
					<a
						className='ref'
						href='https://fahadkhanpakistan.github.io/url-shorten-api/'
						target='_blank'
						rel='noopener noreferrer'
					>
						View Detail
					</a>
				</div>
				<div className='frame'>
					<iframe
						title='Project'
						src='https://fahadkhanpakistan.github.io/theimagegellery/index.html#about-page'
						width='400px'
						height='400px'
					></iframe>
					<a
						className='ref'
						href='https://fahadkhanpakistan.github.io/theimagegellery/index.html#about-page'
					>
						View Detail
					</a>
				</div>
				<div className='frame'>
					<iframe
						title='Project'
						src='https://fahadkhanpakistan.github.io/the-music/'
						width='400px'
						height='400px'
					></iframe>
					<a
						className='ref'
						href='https://fahadkhanpakistan.github.io/the-music/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Detail View
					</a>
				</div>
			</div>
		</animated.section>
	);
}
//
//
//
//
// https://fahadkhanpakistan.github.io/url-shorten-api/
