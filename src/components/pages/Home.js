import React, { Component } from 'react';
import Resources from '../Resources';
import Production from '../Production';
import Log from '../Log';

export class Home extends Component {
	render() {
		return (
			<div className='appContainer'>
				<Resources />
				<Production />
				<Log />
			</div>
		);
	}
}

export default Home;
