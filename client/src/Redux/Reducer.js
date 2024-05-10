const initialState ={
	doggies:[],
	temperaments:[]
}

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case "GET_DOGGIES":
			return {
				...state,
				doggies: action.payload
			};

		// case "REMOVE_FAV":
		// 	return { ...state, myFavorites: action.payload };

		default:
			return { ...state }
	}
}

export default reducer;