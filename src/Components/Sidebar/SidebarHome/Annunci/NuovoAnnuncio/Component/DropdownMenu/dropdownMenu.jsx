import React, { useState } from 'react';
import Select from 'react-select';

const DropdownMenu = ({ propsData, setPropValue, propDropdownValue }) => {
    const[value,setValue]=useState("")
  console.log(propDropdownValue,"5678");

  const handleOnChange = (selectedOption) => {
    setValue(selectedOption)
    console.log(selectedOption)
    if (selectedOption) {
      
      setPropValue(
        selectedOption
      );
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
      />
    </div>
  );
};

export default DropdownMenu;
