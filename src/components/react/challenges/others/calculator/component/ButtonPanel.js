import Button from './Button';
import PropTypes from 'prop-types';
import './ButtonPanel.css';


const buttons = [
	[{label: 'AC', value: 'CLEAR'}, {label: '+/-', value: 'TOGGLE_SIGN'}, {label: '%', value: 'MODULO'}, {label: '÷', value: 'DIVISION'}],
	[{label: '7', value: '7'}, {label: '8', value: '8'}, {label: '9', value: '9'}, {label: 'x', value: 'x'}],
	[{label: '4', value: '4'}, {label: '5', value: '5'}, {label: '6', value: '6'}, {label: '-', value: '-'}],
	[{label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '+', value: '+'}],
	[{label: '0', value: '0'}, {label: '.', value: 'DECIMAL'}, {label: '=', value: 'RESULT'}],
]


function ButtonPanel(props) {

	function handleClick(buttonName) {
		props.clickHandler(buttonName);
	}

	return (
		<div className="component-button-panel">
			{buttons.map((row, index) => {
				return <div key={index}>{row.map((button, btnIndex) => {
					return <Button key={button.value} value={button.value} label={button.label} clickHandler={handleClick} orange={btnIndex === row.length - 1 ? true : false} wide={button.value === '0' ? true : false} />
				})}</div>
			})}
		</div>
	)
}


ButtonPanel.propTypes = {
	clickHandler: PropTypes.func
}

export default ButtonPanel;