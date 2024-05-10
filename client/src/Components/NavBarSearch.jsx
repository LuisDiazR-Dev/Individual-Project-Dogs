import { ButtonNavBarStyled } from './Buttons'

import onSearch from '../Controllers/OnSearch'

import { useState } from 'react' //inicializando estado

const NavBarSearch = () => {
	const [id, setId] = useState('') //definiendo estado en relación a un id
	//id como referencia pero puede ser cualquier nombre

	const handleChange = (event) => {
		setId(event.target.value)
	}

	// const handleOnClick = () => {
	// 	onSearch()
	// 	setId('')
	// }

	const handleOnClick = async () => {
		try {
			const searchData = await onSearch()
			console.log(searchData)
		} catch (error) {
			// Manejar el error si es necesario
		}
		setId('')
	}

	return (
		<div>
			<input
				style={{ height: '1.5rem' }}
				type="search"
				value={id}
				onChange={handleChange}
				required
			/>
			<ButtonNavBarStyled onClick={handleOnClick}>Buscar</ButtonNavBarStyled>
		</div>
	)
}
export default NavBarSearch
