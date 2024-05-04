const {Dog} = require('../../db')



const postDogsDB = async (require, response)=>{
try {
	const {name, age}=require.body
	const addDog = await Dog.create({		
		name,
		age
	})

	response.status(201).json(addDog)
	
} catch (error) {
	response.status(500).json(`No se pudo agregar perrito, error: ${error.message}`);
}
}

module.exports = postDogsDB
