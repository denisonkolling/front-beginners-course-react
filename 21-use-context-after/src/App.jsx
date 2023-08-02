
import './App.css';
import AppProvider from './context/AppProvider';
import ChildrenOne from './components/ChildrenOne';
import ChildrenTwo from './components/ChildrenTwo';

function App() {
	return (
		<AppProvider>
			<ChildrenOne />
			<ChildrenTwo changeName={setName} />
		</AppProvider>
	);
}

export default App;
