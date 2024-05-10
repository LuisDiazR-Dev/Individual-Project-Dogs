import axios from 'acios'


export const getDogsAPI = (infoDoggies) => {

	const endpoint = 'http://localhost:3001/home'

	return (dispatch) => {
		axios.get(endpoint, infoDoggies)
			.then(({ data }) => {
				dispatch({
					type: 'GET_DOGGIES',
					payload: data,
				});
			})
			.catch((error) => {
				console.error('Error adding favorite:', error);
			});
	};
}