import React from 'react'
import Select from 'react-select';
import "./formsPageTwo.css";

class dropdownMenuTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemtitle: "",
            multi: true,
            multiValue: [],
            options: [
                { value: "Color", label: "Yellow1" },
                { value: "Fruit", label: "Apple" },
                { value: "Tool", label: "Spanner" }
            ]
        };
    }
    handleOnChangeTwo(value) {
        this.setState({ multiValue: value });
    }
    render() {
        return (
            <div className="dropdown_menu">
                < Select
                    isSearchable={false}
                    closeMenuOnSelect
                    options={this.state.options}
                    onChange={this.handleOnChangeTwo.bind(this)}
                    value={this.state.multiValue}
                />
            </div>
        );
    }
}
export default dropdownMenuTwo
