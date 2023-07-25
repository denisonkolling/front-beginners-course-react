import styled from 'styled-components';
import Button from './Button';

export const StyledButton = styled.button`
	width: 100px;
	height: 60px;
	border-radius: 10px;
	background-color: ${(prop) =>
		prop.backgroundColor ? prop.backgroundColor : 'gold'};
	opacity: 0.75;
	cursor: pointer;
	color: whitesmoke;
	font-size: 16px;
	font-family: monospace;
	margin: 10px;

	&:hover {
		opacity: 0.9;
		color: white;
	}
`;

export const Button2 = styled(Button)`
	background-color: lightblue;
	width: 100px;
	height: 60px;
`;
