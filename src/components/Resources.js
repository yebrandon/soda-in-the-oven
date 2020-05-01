import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Resources = () => {
	const { numSodas, numCakes, addSodas } = useContext(GlobalContext);

	const click = () => {
		addSodas(1);
	};

	return (
		<div>
			<h1>Resources</h1>
			<h3>Sodas: {numSodas}</h3>
			<h3>Cakes: {numCakes}</h3>
			<button onClick={click}>Crack open a cold one</button>
		</div>
	);
};

export default Resources;
