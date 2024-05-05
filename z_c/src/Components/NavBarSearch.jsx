import ButtonStyled from './Buttons'

import { useState } from 'react' //inicializando estado

const NavBarSearch = ({ onSearch }) => {
	const [id, setId] = useState('') //definiendo estado en relación a un id
	//id como referencia pero puede ser cualquier nombre

	const handleChange = (event) => {
		setId(event.target.value)
	}
	const handleOnClick = () => {
		onSearch(id)
		setId('')
	}
	return (
		<div>
			<input type="search" value={id} onChange={handleChange} required />
			<ButtonStyled onClick={handleOnClick}>Buscar</ButtonStyled>
			{/* <ButtonNav onClick={handleOnClick}>Agregar</ButtonNav> */}
		</div>
	)
}
export default NavBarSearch
