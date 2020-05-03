import React from 'react';
import Dispenser from './Dispenser.jsx';
import dispenser from '../media/dispenser.jpg';
import dispenser2 from '../media/dispenser2.png';

export default function Ovens() {
	return (
		<div>
			<h1>Soda Dispensers</h1>
			<Dispenser
				title='Fountain'
				img={dispenser}
				sodasPerSecond={1}
				cakesPerSoda={1}
				price={2}
			/>
			<Dispenser
				title='Vending Machine'
				img={dispenser2}
				sodasPerSecond={1}
				cakesPerSoda={1}
				price={5}
			/>
		</div>
	);
}
