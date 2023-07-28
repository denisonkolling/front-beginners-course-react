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

	const addGuessedLetters = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter)) return;

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
			<HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
			<HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
			<Keyboard activeLetters={correctGuesses} inactiveLetters={incorrectGuesses} addGuessedLetters={addGuessedLetters}/>
		</>
	);
}

export default App;
