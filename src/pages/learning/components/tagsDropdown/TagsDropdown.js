import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Select from "react-select";



const getDropDownOption = (value) => {
   return { value, label: value.charAt(0).toUpperCase() + value.slice(1) };
};
const getDropdownOptions = (values) => {
   return values.map(getDropDownOption);
};
const getValuesFromOptions = (options) => {
   return options.map((opt) => opt.value);
};

const customStyles = {
   control: (base, state) => ({
      ...base,
      background: "#444",
      color: "#fff",
   }),
   menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      background: "#444",
      color: "#fff",
   }),
   menuList: (base) => ({
      ...base,
      padding: 0,
      background: "#444",
      color: "#fff",
   }),
};



export default function TagsDropdown({options, onChange, value, ...rest}) {

   // Don't want it to always get dropdown values on every render, so useMemo
   const allOptions = useMemo(() => {
      console.log("dropdownOptions called");
      return getDropdownOptions(options);
   }, []);

   function handleOptionSelect(options) {
      if (onChange !== undefined) {
         const tags = getValuesFromOptions(options);
         onChange(tags);
      }
   }
   
   const selectedOptions = getDropdownOptions(value);


	return (
		<Select
			styles={customStyles}
			options={allOptions}
			onChange={handleOptionSelect}
			value={selectedOptions}
			{...rest}
		/>
	)
}