import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';

function App() {
	return (
		<div>
			<Router basename='/'>
				<div class='navContainer'>
					<h1>Soda in the Oven Online</h1>
					<NavBar></NavBar>
				</div>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/home' component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
