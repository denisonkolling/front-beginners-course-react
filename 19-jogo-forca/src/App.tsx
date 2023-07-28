import './App.css';
import HangmanDrawing from './components/hangman-drawing';
import HangmanWord from './components/hangman-word';
import Keyboard from './components/keyboard';
import { useState, useEffect, useCallback } from 'react';

const words = ['padaria', 'caneca', 'bola', 'caneta', 'ilha', 'cidade'];

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	});

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const incorrectGuesses = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	const correctGuesses = guessedLetters.filter((letter) =>
		wordToGuess.includes(letter)
	);

	const isLoser = incorrectGuesses.length >= 6;
	const isWinner = wordToGuess
		.split('')
		.every((letter) => guessedLetters.includes(letter));

	const addGuessedLetters = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;

			setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
		},
		[guessedLetters]
	);

	useEffect(() => {
		const handler = ((e: KeyboardEvent) => {
			const key = e.key;

			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			addGuessedLetters(key);
		}) as unknown as EventListener;
		console.log('ativou event listener');
		document.addEventListener('keypress', handler);

		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, [guessedLetters]);

	return (
		<>
			<h3>
				{isLoser && 'Você perdeu!😭 Atualize a página para um novo jogo...'}
			</h3>
			<h2>{isWinner && 'Parabéns você venceu!🚀👏🎉'}</h2>
			<HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
			<HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
			<Keyboard
				disabled={isLoser || isWinner}
				activeLetters={correctGuesses}
				inactiveLetters={incorrectGuesses}
				addGuessedLetters={addGuessedLetters}
			/>
		</>
	);
}

export default App;
