require('dotenv').config();

const { API_KEY } = process.env;
const axios = require('axios')




const getDogsApi = async (request, response)=>{
	const URL = 'https://api.thedogapi.com/v1/breeds'

	try {
		const result = await axios.get(`${URL}?api_key=${API_KEY}`)

		result.data ? console.log('si') : console.log('no')
		console.log(result.data[1])
		
		const {image, name, temperament, weight} = result.data[1]
		const doggie = {image, name, temperament, weight}

		console.log(doggie)
		response.status(200).json(doggie);

	} catch (error) {
		response.status(500).json(`Perritos perdidos ${error.message}`);

	}
}

module.exports = getDogsApi