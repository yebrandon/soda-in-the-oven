import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import PropTypes from 'prop-types';

const Dispenser = (props) => {
	const [numUnits, setNumUnits] = useState(0);
	const [price, setPrice] = useState(props.price);
	const { numCakes, addCakes, removeCakes, addSodas } = useContext(
		GlobalContext
	);

	useEffect(() => {
		// move bake into here?
		const interval = setInterval(() => {
			dispense();
		}, 1000);
		return () => clearInterval(interval);
	}, [numUnits]);

	const dispense = () => {
		console.log(`dispense ${numUnits} units ${numCakes} cakes`);
		removeCakes(props.cakesPerSoda * props.sodasPerSecond * numUnits);
		addSodas(props.sodasPerSecond * numUnits);
	};

	const buy = () => {
		if (numCakes >= price) {
			setNumUnits(numUnits + 1);
			removeCakes(price);
			setPrice(parseInt(1.5 * price));
		}
	};

	const sell = () => {
		if (numUnits > 0) {
			addCakes(price / 1.5);
			setNumUnits(numUnits - 1);
			setPrice(price / 1.5);
		}
	};

	return (
		<div>
			<h1>{props.title}</h1>
			{price} cakes
			<br />
			{props.cakesPerSecond} cakes per second
			<br />
			{numUnits}
			<button onClick={buy}>Buy</button>
			<button onClick={sell}>Sell</button>
			<img src={props.img} alt={props.title} height='100' width='100' />
		</div>
	);
};

Dispenser.propTypes = {};

export default Dispenser;
