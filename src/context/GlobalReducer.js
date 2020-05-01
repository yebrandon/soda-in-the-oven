export default (state, action) => {
	switch (action.type) {
		case 'ADD_SODAS':
			return {
				...state,
				numSodas: state.numSodas + action.payload
			};
		case 'ADD_CAKES':
			return {
				...state,
				numCakes: state.numCakes + action.payload
			};
		case 'REMOVE_SODAS':
			if (state.numSodas >= action.payload) {
				return {
					...state,
					numSodas: state.numSodas - action.payload
				};
			}
		// fallthrough
		case 'REMOVE_CAKES':
			return {
				...state,
				numCakes: state.numCakes - action.payload
			};
		default:
			return state;
	}
};
