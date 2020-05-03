import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Log = () => {
	const [text, setText] = useState('Hello!');
	const { numSodas, addSodas, removeSodas, addCakes } = useContext(
		GlobalContext
	);

	useEffect(() => {
		if (numSodas > 100) {
			//setText(`${text}\n100 Sodas!`);
			setText((t) => `${text}\n100 Sodas!`);
		}
	}, [numSodas]);

	return (
		<div>
			<h1>Log</h1>
			<p>{text}</p>
		</div>
	);
};

export default Log;
