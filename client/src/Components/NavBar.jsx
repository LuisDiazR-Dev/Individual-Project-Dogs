import styled from 'styled-components'

// * components
import NavBarSearch from './NavBarSearch'
import { ButtonNavBarStyled } from './Buttons'

import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
	const navigate = useNavigate()

	const logOut = (event) => {
		if (event) navigate('/')
	}

	return (
		<NavBarSection>
			<div>
				<Link to={'/home'}>
					<h1>Doggies App</h1>
				</Link>
			</div>

			<div className="nav">
				<NavBarSearch />

				<ButtonNavBarStyled>Agregar</ButtonNavBarStyled>
				<ButtonNavBarStyled onClick={logOut}>Log out</ButtonNavBarStyled>
			</div>
		</NavBarSection>
	)
}

export default NavBar

const NavBarSection = styled.section`
	border: 1px solid rgba(0, 0, 0, 0.178);

	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	a > h1 {
		color: white;
		/* text-decoration: none; */
	}

	.nav {
		display: flex;
		align-items: center;
		height: 100%;

		div {
			padding: 0 0.5em;
		}
	}
`
