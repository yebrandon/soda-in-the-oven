import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<div>
			<GlobalProvider>
				<Router basename='/'>
					<div className='navContainer'>
						<h1>Soda in the Oven Online</h1>
						<NavBar></NavBar>
					</div>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/home' component={Home} />
						<Route path='/about' component={About} />
					</Switch>
				</Router>
			</GlobalProvider>
		</div>
	);
}

export default App;
