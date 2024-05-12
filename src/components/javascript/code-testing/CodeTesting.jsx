

import React, {useEffect, useState} from 'react';
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';




function Child(props) {
	const renderCount = useRenderCounter(0);
	return (
		<div className="mb-3">{renderCount} This is the child component</div>
	)
}

// eslint-disable-next-line no-func-assign
Child = React.memo(Child);

export default function CodeTesting() {

	const [, setPerson] = React.useState();

	function callApi() {
		setPerson({name: 'Leonel'});
	}

	return (
		<div>
			<Child />
			<button onClick={callApi}>Call api</button>
		</div>
	)
}