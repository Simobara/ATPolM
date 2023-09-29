import React, { useEffect, useState } from "react";
import Select from "react-select";

const DropdownMenu = ({ propsData, setPropValue, propDropdownValue, isCancella, setIsCancella }) => {
  const [value, setValue] = useState("");
  const handleOnChange = (selectedOption) => {
    setValue(selectedOption);
    if (selectedOption) {
      setPropValue(selectedOption);
    } else {
      setPropValue(null);
    }
  };
  useEffect(() => {
    if (isCancella) {
      setValue("");
      setIsCancella(false);
    }
    // eslint-disable-next-line 
  }, [isCancella]);
  return (
    <div className="dropdown_menu">
      <Select isSearchable={false} closeMenuOnSelect options={propsData} onChange={handleOnChange} value={value} />
    </div>
  );
};

export default DropdownMenu;
