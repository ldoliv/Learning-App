import React, {useCallback, useEffect, useState} from "react";
import {fetchPokemon} from "../helpers";
import {useAsync} from "./UseAsync";



export default function TestUseAync() {

	return (
		<div>
			<TestWithState />
			<TestWithPromise />
		</div>
	)
}

function TestWithState() {

	const fetchPokemonWrapper = useCallback((...args) => {
		// console.log(args);
		if (args.length === 2) {
			return fetchPokemon(args[0], {
				signal: args[1],
			})
		} else if (args.length === 3) {
			return fetchPokemon(args[0], {
				...args[1],
				signal: args[2],
			})
		}
	}, []);

	const [getPokemonR, getPokemon] = useAsync(fetchPokemonWrapper);
	// const [getPokemonR, getPokemon] = useAsync(fetchPokemon);

	function handleClick() {
		getPokemon('pikachu', {
			delay: 2500
		})
		// getPokemon('pikachu')
	}

	useEffect(() => {
		if (getPokemonR.status.resolved) {
			// handle success
		} else if (getPokemonR.status.rejected) {
			// handle error
		}
	}, [getPokemonR.status])

	console.log({
		...getPokemonR,
		status: Object.keys(getPokemonR.status).find(status => getPokemonR.status[status])
	});

	return (
		<div className="mb-4">
			<h3>With status, data and error returned from the hook</h3>
			<div><button onClick={handleClick}>Make Request</button></div>
			<div>status: {Object.keys(getPokemonR.status).find(status => getPokemonR.status[status])}</div>
			<div>data: {JSON.stringify(getPokemonR.data)}</div>
		</div>
	)
}

const STATUS = {
	IDLE: 'IDLE',
	PENDING: 'PENDING',
	RESOLVED: 'RESOLVED',
	REJECTED: 'REJECTED'
}

function TestWithPromise() {

	const [getPokemon] = useAsync(fetchPokemon, {useState: false});
	const [response, setResponse] = useState({
		status: STATUS.IDLE,
		data: null,
		error: null
	})

	function handleClick() {
		setResponse({status: STATUS.PENDING, data: null, error: null})
		getPokemon('pikachu')
			.then(data => {
				setResponse({status: STATUS.RESOLVED, data: data, error: null});
			})
			.catch(error => {
				setResponse({status: STATUS.REJECTED, data: null, error: error});
			})
	}
	
	console.log('status: %o, data: %o, error: %o', response.status, response.data, response.error);

	return (
		<div className="mb-4">
			<h3>With Promise, response is handled in the component</h3>
			<div><button onClick={handleClick}>Make Request</button></div>
			<div>status: {response.status}</div>
			<div>data: {JSON.stringify(response.data)}</div>
		</div>
	)
}

