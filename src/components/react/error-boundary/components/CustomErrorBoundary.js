import React from 'react';


class CustomErrorBoundary extends React.Component {

	constructor (props) {
		super(props);
		this.state = {error: null, errorInfo: null};
	}

	// static getDerivedStateFromError(error) {
	// 	console.log(error);
	// 	// Update state so the next render will show the fallback UI.
	// 	return {error};
	// }

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error,
			errorInfo
		})
		// You can also log error messages to an error reporting service here
	}

	reset() {
		this.setState({error: null, errorInfo: null})
	}

	render() {

		if (this.state.errorInfo) {

			if (this.props.render) {
				return (
					<div>
						<this.props.render error={this.state.error} componentStack={this.state.errorInfo.componentStack} />
						<button onClick={() => this.reset()}>Reset</button>
					</div>
				)

			} else {
				return (
					<div>
						<h2>Something went wrong.</h2>
						<details style={{whiteSpace: 'pre-wrap'}}>
							{this.state.error && this.state.error.toString()}
							<br />
							{this.state.errorInfo.componentStack}
						</details>
						<button onClick={() => this.reset()}>Reset</button>
					</div>
				);
			}

		}
		// Normally, just render children
		return this.props.children;
	}
}

export default CustomErrorBoundary;