import React from "react";
import {useAsync_v1, useAsync_v2} from "./UseAsync";
import { fetchPokemon } from "./helpers";


export default function TestUseAync() {

	const [pokemonName, setPokemonName] = React.useState('');
	

	// const {data, status, error} = useAsync_v1(() => {

	// 	if (!pokemonName) {
	// 		return
	// 	}

   //  	return fetchPokemon(pokemonName)
	// }, {
   //  status: pokemonName ? 'pending' : 'idle',
   //  // 🐨 this will need to be "data" instead of "pokemon"
   //  data: null,
   //  error: null,
	// }, [pokemonName])


	const {status, data, error, run} = useAsync_v2({status: pokemonName ? 'pending' : 'idle'})

	React.useEffect(() => {

    if (!pokemonName) {
      return
    }

    run(fetchPokemon(pokemonName))

  }, [pokemonName, run])


	return (
		<div>
			<div><button onClick={() => setPokemonName('pikachu')}>Make Request</button></div>
			<div>status: {status}</div>
			<div>data: {JSON.stringify(data)}</div>
		</div>
	)
}