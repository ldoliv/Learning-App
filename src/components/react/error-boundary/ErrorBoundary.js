import React from 'react';
import BuggyCounter from './components/BuggyCounter';
import CustomErrorBoundary from './components/CustomErrorBoundary';
import {ErrorBoundary} from 'react-error-boundary'


function RenderError({error, componentStack}) {

	return (
		<div>
			<h2>Something went wrong.</h2>
			<details style={{whiteSpace: 'pre-wrap'}}>
				{error && error.toString()}
				<br />
				{componentStack}
			</details>
		</div>
	);
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export function TestErrorBoundary(props) {

	// return (
	// 	<CustomErrorBoundary render={RenderError}>
	// 		<BuggyCounter />
	// 	</CustomErrorBoundary>
	// )

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<BuggyCounter />
		</ErrorBoundary>
	)
}