import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import "./dropdownMenu.css";
const DropdownMenu = ({ propsData, propSetValue, propDropdownValue, placeholder }) => {
  console.log("propsData", propDropdownValue)

  const [value, setValue] = useState(null); // Impostato su null per evitare conflitti con il placeholder

  useEffect(() => { setValue(propDropdownValue) }, [propDropdownValue])
  const handleOnChange = (selectedOption) => {
    setValue(selectedOption);
    if (selectedOption) {
      console.log(selectedOption, "selectedOption")
      propSetValue(selectedOption);
    } else {
      propSetValue(null);
    }
  };

  return (
    <div className="dropdown_menu">
      <Select
      className='dropdownPlaceHolder'
        isSearchable={false}
        closeMenuOnSelect
        options={propsData}
        onChange={handleOnChange}
        value={value}
        placeholder={propDropdownValue || "Seleziona.."} // Usa il placeholder passato come prop o un testo di default
      />
    </div>
  );
};

export default DropdownMenu;
