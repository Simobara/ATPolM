import React, { useState } from 'react';
import Select from 'react-select';

const DropdownMenu = ({ propsData, setPropValue, propDropdownValue, placeholder }) => {
  console.log("propsData", propsData)

  const [value, setValue] = useState(null); // Impostato su null per evitare conflitti con il placeholder

  const handleOnChange = (selectedOption) => {
    setValue(selectedOption);
    if (selectedOption) {
      setPropValue(selectedOption);
    } else {
      setPropValue(null);
    }
  };

  return (
    <div className="dropdown_menu">
      <Select
        isSearchable={false}
        closeMenuOnSelect
        options={propsData}
        onChange={handleOnChange}
        value={value}
        placeholder={placeholder || "Seleziona.."} // Usa il placeholder passato come prop o un testo di default
      />
    </div>
  );
};

export default DropdownMenu;
