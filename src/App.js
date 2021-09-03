/** @format */
import './App.css';
import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
	const fade = useSpring({
		from: {
			transform: 'translateY(-50px)',
			opacity: 0,
		},
		to: {
			transform: 'translateY(0px)',
			opacity: 1,
		},
	});
	const opacity = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

	return (
		<animated.div className='app-container' style={opacity}>
			<Router>
				<animated.nav style={fade}>
					<Nav />
				</animated.nav>
				<main>
					<Switch>
						<Route path='/fahadsPortfolio' exact>
							<Home />
						</Route>
						<Route path='/experience'>
							<Experience />
						</Route>
						<Route path='/projects'>
							<Projects />
						</Route>
						<Route path='/skills'>
							<Skills />
						</Route>
					</Switch>
				</main>
			</Router>
		</animated.div>
	);
}

export default App;
