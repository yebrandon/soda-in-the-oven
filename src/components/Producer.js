import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import PropTypes from 'prop-types';

const Producer = (props) => {
	const [numUnits, setNumUnits] = useState(0);
	const [price, setPrice] = useState(props.price);
	const { numSodas, addSodas, removeSodas, addCakes } = useContext(
		GlobalContext
	);

	useEffect(() => {
		// move bake into here?
		const interval = setInterval(() => {
			bake();
		}, 1000);
		return () => clearInterval(interval);
	}, [numUnits]);

	const bake = () => {
		console.log('bake' + numUnits + numSodas);
		removeSodas(props.sodasPerCake * props.cakesPerSecond * numUnits);
		addCakes(props.cakesPerSecond * numUnits);
	};

	const buy = () => {
		if (numSodas >= price) {
			setNumUnits(numUnits + 1);
			removeSodas(price);
			setPrice(parseInt(1.5 * price));
		}
	};

	const sell = () => {
		if (numUnits > 0) {
			addSodas(price / 1.5);
			setNumUnits(numUnits - 1);
			setPrice(price / 1.5);
		}
	};

	return (
		<div>
			<h1>{props.title}</h1>
			{price} sodas
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

Producer.propTypes = {};

export default Producer;
