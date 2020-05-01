import React from 'react';
import Producer from './Producer.js';
import oven from '../media/oven.jpg';
import biggerOven from '../media/oven2.jpg';
import evenBiggerOven from '../media/oven3.jpg';
import damnThatsABigOven from '../media/oven4.jpg';

export default function Production() {
	return (
		<div>
			<h1>Production</h1>
			<Producer
				title='Oven'
				img={oven}
				cakesPerSecond={1}
				sodasPerCake={1}
				price={2}
			/>
			<Producer
				title='Bigger Oven'
				img={biggerOven}
				cakesPerSecond={2}
				sodasPerCake={1}
				price={5}
			/>
			<Producer
				title='Even Bigger Oven'
				img={evenBiggerOven}
				cakesPerSecond={5}
				sodasPerCake={1}
				price={50}
			/>
			<Producer
				title="Damn That's a Big Oven"
				img={damnThatsABigOven}
				cakesPerSecond={10}
				sodasPerCake={1}
				price={1000}
			/>
		</div>
	);
}
