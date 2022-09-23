import React from 'react'
import warning from 'warning'

// For dealing when changing from uncontrolled to controlled component or vice versa
// To test this, this can easily be achieved by setting the initial state to undefined and then setting a value or vice versa
export function useControlledSwitchWarning(
  controlPropValue,
  controlPropName,
  componentName
) {
  
  const isControlled = controlPropValue != null
  const {current: wasControlled} = React.useRef(isControlled)

  React.useEffect(() => {

    warning(
      !(isControlled && !wasControlled),
      `\`${componentName}\` is changing from uncontrolled to be controlled. Components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled \`${componentName}\` for the lifetime of the component. Check the \`${controlPropName}\` prop.`,
    )
    warning(
      !(!isControlled && wasControlled),
      `\`${componentName}\` is changing from controlled to be uncontrolled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled \`${componentName}\` for the lifetime of the component. Check the \`${controlPropName}\` prop.`,
    )
  }, [componentName, controlPropName, isControlled, wasControlled])
}

