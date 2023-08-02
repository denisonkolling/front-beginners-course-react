import { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('nome...');

	return (
		<>
			<div>{name}</div>
			<ChildrenOne changeName={setName} />
		</>
	);
}

function ChildrenOne({ changeName }) {
	return <ChildrenTwo changeName={changeName} />;
}

function ChildrenTwo({ changeName }) {
	return (
		<button onClick={() => changeName('Carlinhos da Massa')}>
			Mude o nome...
		</button>
	);
}

export default App;
