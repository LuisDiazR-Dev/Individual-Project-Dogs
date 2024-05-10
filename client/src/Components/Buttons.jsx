import styled from 'styled-components'

const ButtonNavBarStyled = styled.button`
	border-radius: 8px;
	border: 1px solid grey;
	padding: 0.2em 1.5em;
	margin: 0.2em 0.2em;
	/* font-size: 1em; */
	font-weight: 500;
	font-family: inherit;
	/* background-color: #1a1a1a; */
	cursor: pointer;
	transition: border-color 0.25s;

	/* color: rgba(255, 255, 255, 0.87); */
	/* background-color: #1a1a1a; */
	/* background-color: #00ABC2; */
	cursor: pointer;
	transition: border-color 0.25s;

	&:hover {
		border-color: #646cff;
		/* border-color: #00ABC2;	 */
	}
`

export { ButtonNavBarStyled }
