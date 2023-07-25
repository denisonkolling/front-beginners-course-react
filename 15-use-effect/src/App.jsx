import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState('');
	const [repo, setRepo] = useState('');

	useEffect(() => {
		fetch('https://api.github.com/users/denisonkolling')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	useEffect(() => {
		fetch('https://api.github.com/users/denisonkolling/repos')
			.then((res) => res.json())
			.then((repo) => setRepo(repo));
	}, []);

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<div>
				<h1>{data.name}</h1>

				<h3>
					{repo.map((repo) => (
						<a href="">{repo.full_name}</a>
					))}
				</h3>
			</div>
		</>
	);
}

export default App;
