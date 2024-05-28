import React, {useEffect, useState} from "react";
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

	const [getPokemonR, getPokemon] = useAsync(fetchPokemon);

	function handleClick() {
		getPokemon('pikachu')
	}

	useEffect(() => {
		if (getPokemonR.status.resolved) {
			// handle success
		} else if (getPokemonR.status.rejected) {
			// handle error
		}
	}, [getPokemonR.status])

	console.log('status: %o, data: %o, error: %o', getPokemonR.status, getPokemonR.data, getPokemonR.error);

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

