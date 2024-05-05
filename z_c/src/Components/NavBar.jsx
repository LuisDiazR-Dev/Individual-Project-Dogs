import styled from 'styled-components'

// * components
import NavBarSearch from './NavBarSearch'
import ButtonStyled from './Buttons'

// import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
	return (
		<NavBarSection>
			<div>
				<h1>Doggies App</h1>
			</div>

			<div className="nav">
				<NavBarSearch />

				<ButtonStyled>Acceder/Salir</ButtonStyled>
			</div>
		</NavBarSection>
	)
}

export default NavBar

const NavBarSection = styled.section`
	border: 1px solid black;

	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;

	.nav {
		display: flex;
		align-items: center;

		height: 100%;

		div {
			padding: 0 1rem;
		}
	}
`
