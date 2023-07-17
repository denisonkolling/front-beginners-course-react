import './App.css';
import axios from 'axios';
import { useState } from 'react';
import useAxios from './hook/use-axios';
import pokemonInstance from './helper/axios-instance';

function App() {

	const [pokemonList, loading, error] = useAxios({
		axiosInstance: pokemonInstance,
		method: 'get',
		url: 'pokemon',
	})

console.log(pokemonList, loading, error)

if(loading){
	return <div>Loading...</div>
}

	return (
		<>
			<div>
				<h1>Bem-vindo!</h1>
        <div>
          {pokemonList?.results?.map((pokemon, index)=>(
            <div key={index}>{pokemon.name}</div>
          ))}
        </div>
			</div>
		</>
	);
}

export default App;
