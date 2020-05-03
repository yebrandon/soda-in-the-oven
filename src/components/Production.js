import React from 'react';
import Ovens from './Ovens';
import Dispensers from './Dispensers';

export default function Production() {
	return (
		<div>
			<h1>Production</h1>
			<Ovens />
			<Dispensers />
		</div>
	);
}
