import axios from 'axios'

const onSearch = async () => {
	//aquí el id que entra es String
	// if (characters.find((char) => char.id == id)) {
	// 	return window.alert('Ya Tienes esta Carta')
	// }
	// if (id > 826) {
	// 	return window.alert('¡No hay personajes con este ID!')}
	// *el return evita le ejecución del axios

	try {
		const response = await axios.get(`http://localhost:3001/`)
		console.log(response.data)
		return response.data

		// setCharacters((oldChars) => [...oldChars, endpoint.data])
	} catch (error) {
		console.log(`ha ocurrido el siguiente error: ${error.message}`)
	}
}

export default onSearch
