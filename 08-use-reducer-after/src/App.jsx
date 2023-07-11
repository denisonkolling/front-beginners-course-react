import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
	switch (action.type) {
		case 'Increment':
			return { ...state, count: state.count + 1 };
		case 'showText':
			return { ...state, showText: !state.showText };
		case 'resetValue':
			return { count: 0, showText: true };
		default:
			return "This action doesn't exist";
	}
};

function App() {
  
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

	//const {count, showText } = state; <- desestruturação se necessário deixar de utilizar state. na utilização da variável

	const handleClick = () => {
		dispatch({ type: 'Increment' });
		dispatch({ type: 'showText' });
	};

	return (
		<>
			<div className="App">
				<h1>Front Beginners</h1>
				<h3>{state.count}</h3>
				<button onClick={handleClick}>Count</button>
				<button onClick={() => dispatch({ type: 'resetValue' })}>Reset</button>
				{state.showText && <p>Bem-vindo ao melhor canal de front-end!</p>}
			</div>
		</>
	);
}

export default App;
