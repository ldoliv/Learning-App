import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {

	function handleClick() {
		// console.log(props);
		props.clickHandler(props.value);
	}

	const className = [
		'component-button',
		props.orange ? 'orange' : '',
		props.wide ? 'wide' : ''
	];

	return (
		<div className={className.join(' ').trim()}>
			<button onClick={handleClick}>{props.label}</button>
		</div>
	)
}

Button.propTypes = {
	name: PropTypes.string,
	orange: PropTypes.bool,
	wide: PropTypes.bool,
	clickHandler: PropTypes.func,
}

export default Button;