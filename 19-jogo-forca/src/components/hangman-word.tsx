import { styled } from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	font-size: 3.5rem;
	font-weight: bold;
	text-transform: uppercase;
	font-family: monospace;
`;

interface HangmanWordProps {
	word: string
	guessedLetters: string[]
}

const HangmanWord = ({word, guessedLetters}: HangmanWordProps ) => {


	return (
		<Wrapper>
			{word.split('').map((letter, index) => (
				<span style={{ borderBottom: '0.05em solid white'}} key={index}>
				<span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
				</span>
			))}
		</Wrapper>
	);
};

export default HangmanWord;
