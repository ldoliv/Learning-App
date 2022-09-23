
import React from 'react';
import {Switch} from 'components/global/Switch/Switch';
import {useToggle, actionTypes} from './hooks/useToggle';


function Toggle({on: controlledOn, onChange}) {

  const {on, getTogglerProps} = useToggle({on: controlledOn, onChange})
  const props = getTogglerProps({on})
  return <Switch {...props} />
}


function ControlProps() {
  const [bothOn, setBothOn] = React.useState(false)
  const [timesClicked, setTimesClicked] = React.useState(0)

  function handleToggleChange(state, action) {
    if (action.type === actionTypes.toggle && timesClicked > 4) {
      return
    }
    setBothOn(state.on)
    setTimesClicked(c => c + 1)
  }

  function handleResetClick() {
    setBothOn(false)
    setTimesClicked(0)
  }

  return (
	  <div>
		  
      <div>
        <Toggle on={bothOn} onChange={handleToggleChange} />
        <Toggle on={bothOn} onChange={handleToggleChange} />
		</div>
		  
      {timesClicked > 4 ? (
        <div data-testid="notice">
          Whoa, you clicked too much!
          <br />
        </div>
      ) : (
        <div data-testid="click-count">Click count: {timesClicked}</div>
		  )}
		  
		  <button onClick={handleResetClick}>Reset</button>
		  
      <hr />
      <div>
        <div>Uncontrolled Toggle:</div>
			<Toggle
				onChange={(...args) =>
					console.info('Uncontrolled Toggle onChange', ...args)
				}
        />
      </div>
    </div>
  )
}

export default ControlProps;