import styled from 'styled-components';

const keyboard = ({
	activeLetters,
	inactiveLetters,
	addGuessedLetters,
}: KeyBoardProps) => {
	interface KeyBoardProps {
		activeLetters: string[];
		inactiveLetters: string[];
		addGuessedLetters: (letter: string) => void;
	}

	const keys = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const Wrapper = styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
		width: 500px;
		margin: 25px;
	`;

	const Button = styled.button<{ isActive: boolean }>`
		opacity: ${(props) => (props.isActive ? 'null' : '0.5')};
		margin: 4px;

		&:focus:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:focus-visible:disabled{
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:hover:disabled{
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
	`;

	return (
		<Wrapper>
			{keys.map((letter) => {
				const isActive = !activeLetters.includes(letter);
				const isInactive = !inactiveLetters.includes(letter);
				return (
					<Button
						onClick={() => addGuessedLetters(letter)}
						isActive={isActive && isInactive}
						key={letter}
            disabled={!(isActive && isInactive)}
			      >
						{letter.toUpperCase()}
					</Button>
				);
			})}
		</Wrapper>
	);
};

export default keyboard;
