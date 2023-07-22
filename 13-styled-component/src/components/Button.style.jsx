import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 100px;
	height: 60px;
	border-radius: 10px;
	background-color: purple;
	opacity: 0.75;
	cursor: pointer;
	color: whitesmoke;
  font-size: 16px;
  font-family: monospace;

	&:hover {
		opacity: 0.9;
		color: white;
	}
`;
