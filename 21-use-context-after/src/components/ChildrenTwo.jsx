import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ChildrenTwo() {
	const { setName } = useContext(AppContext);

	return (
		<button onClick={() => setName('Carlinhos da Massa')}>Mude o nome</button>
	);
}
