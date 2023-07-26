import './App.css';
import HangmanDrawing from './components/hangman-drawing';
import HangmanWord from './components/hangman-word';
import Keyboard from './components/keyboard';
import { useState } from 'react';

const words = ['padaria', 'caneca', 'bola', 'caneta', 'ilha', 'cidade']

function App() {

	const [ wordToGuess, setWordToGuess] = useState(() => { 
		return words[Math.floor(Math.random() * words.length)]})

	return (
		<>
			<HangmanDrawing />
			<HangmanWord word={wordToGuess}/>
			<Keyboard />
		</>
	);
}

export default App;
