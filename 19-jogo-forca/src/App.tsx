import './App.css';
import HangmanDrawing from './components/hangman-drawing';
import HangmanWord from './components/hangman-word';
import Keyboard from './components/keyboard';
import { useState, useEffect } from 'react';

const words = ['padaria', 'caneca', 'bola', 'caneta', 'ilha', 'cidade'];

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	});

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const incorrectGuesses = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	function addGuessedLetters(letter: string) {
		if (guessedLetters.includes(letter)) return;

		setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
	}

	useEffect(() => {
		const handler = ((e: KeyboardEvent) => {
			const key = e.key;

			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			addGuessedLetters(key);
		}) as unknown as EventListener;
		
		document.addEventListener('keypress', handler);

		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, []);

	return (
		<>
			<HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
			<HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
			<Keyboard />
		</>
	);
}

export default App;
