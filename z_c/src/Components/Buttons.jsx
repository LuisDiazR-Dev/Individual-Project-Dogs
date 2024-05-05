import styled from 'styled-components'

const ButtonStyled = styled.button`
	/* border-radius: 5px; */
	/* border: 1px solid transparent; */
	padding: 0.3em 1.2em;
	margin: 0.3em 0.6em;
	/* font-size: 1em; */
	font-weight: 500;

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

export default ButtonStyled
