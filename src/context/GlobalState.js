import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

// Initial state
const initialState = {
	numSodas: 10000000,
	numCakes: 0,
	lifetimeSodas: 0
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, initialState);

	function addCakes(num) {
		dispatch({
			type: 'ADD_CAKES',
			payload: num
		});
	}

	function addSodas(num) {
		dispatch({
			type: 'ADD_SODAS',
			payload: num
		});
	}

	function removeCakes(num) {
		dispatch({
			type: 'REMOVE_CAKES',
			payload: num
		});
	}

	function removeSodas(num) {
		dispatch({
			type: 'REMOVE_SODAS',
			payload: num
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				numSodas: state.numSodas,
				numCakes: state.numCakes,
				lifetimeSodas: state.lifetimeSodas,
				addCakes,
				addSodas,
				removeCakes,
				removeSodas
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
