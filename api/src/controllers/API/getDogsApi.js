require('dotenv').config();

const { API_KEY } = process.env;
const axios = require('axios')




const getDogsApi = async (request, response)=>{
	const URL = 'https://api.thedogapi.com/v1/breeds'

	try {
		const result = await axios.get(`${URL}?api_key=${API_KEY}`)

		const doggies = result.data.slice(0, 2)

		
		const getDogsApi = doggies.map(dog => {
			const { id, image, name, height, weight, temperament,life_span } = dog;
			return { id, image, name, height, weight, temperament,life_span };
		});

		console.log(getDogsApi)
		response.status(200).json(getDogsApi);

	} catch (error) {
		response.status(500).json(`Perritos perdidos ${error.message}`);

	}
}

module.exports = getDogsApi