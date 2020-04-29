import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
	render() {
		return (
			<nav className='Nav'>
				<ul className='navitems'>
					<NavLink
						className='link-item home'
						activeClassName='link-item-active home'
						to='/home'
					>
						HOME
					</NavLink>
					<NavLink
						className='link-item workshops'
						activeClassName='link-item-active about'
						to='/about'
					>
						ABOUT
					</NavLink>
				</ul>
			</nav>
		);
	}
}

export default NavBar;
