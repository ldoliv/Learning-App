import React from "react"
import warning from "warning"


// Show a warning if it's controlled but no onChange handler was provided and readOnly prop is not true
export function useOnChangeReadOnlyWarning(
  controlPropValue,
  controlPropName,
  componentName,
  hasOnChange,
  readOnly,
  readOnlyProp,
  initialValueProp,
  onChangeProp
) {
  const isControlled = controlPropValue != null
	React.useEffect(() => {
    warning(
      !(!hasOnChange && isControlled && !readOnly),
      `A \`${controlPropName}\` prop was provided to \`${componentName}\` without an \`${onChangeProp}\` handler. This will result in a read-only \`${controlPropName}\` value. If you want it to be mutable, use \`${initialValueProp}\`. Otherwise, set either \`${onChangeProp}\` or \`${readOnlyProp}\`.`
    )
  }, [componentName, controlPropName, hasOnChange, initialValueProp, isControlled, onChangeProp, readOnly, readOnlyProp])
}