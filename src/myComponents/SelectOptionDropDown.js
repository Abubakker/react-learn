import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class SelectOptionDropDown extends Component {

    constructor() {
        super();
        this.state = {
            division1: "Dhaka",
            division2: "Rajshahi",
            division3: "Rangpur",
            division4: "Sylet",
            division5: "Barisal",
            autoSelect: "Rajshahi",
            selectedVal: " "
        }
    }

    onChangeHandler = (e) => {
        var selectedVal = e.target.value;
        this.setState({autoSelect: selectedVal, selectedVal: selectedVal})
    }

    render() {
        return (
            <div>
                <h6>Select</h6>
                <p>{this.state.selectedVal}</p>
                <select onChange={this.onChangeHandler} className="custom-select mb-4" id="division" value={this.state.autoSelect}>
                    <option>{this.state.division1}</option>
                    <option>{this.state.division2}</option>
                    <option>{this.state.division3}</option>
                    <option>{this.state.division4}</option>
                </select>
            </div>
        );
    }
}

export default SelectOptionDropDown;