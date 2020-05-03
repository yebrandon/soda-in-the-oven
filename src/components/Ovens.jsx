import React from 'react';
import Oven from './Oven';
import oven from '../media/oven.jpg';
import oven2 from '../media/oven2.jpg';
import oven3 from '../media/oven3.jpg';
import oven4 from '../media/oven4.jpg';

export default function Ovens() {
	return (
		<div>
			<h1>Ovens</h1>
			<Oven
				title='Oven'
				img={oven}
				cakesPerSecond={1}
				sodasPerCake={1}
				price={2}
			/>
			<Oven
				title='Bigger Oven'
				img={oven2}
				cakesPerSecond={2}
				sodasPerCake={1}
				price={5}
			/>
			<Oven
				title='Even Bigger Oven'
				img={oven3}
				cakesPerSecond={5}
				sodasPerCake={1}
				price={50}
			/>
			<Oven
				title="Damn That's a Big Oven"
				img={oven4}
				cakesPerSecond={10}
				sodasPerCake={1}
				price={1000}
			/>
		</div>
	);
}
