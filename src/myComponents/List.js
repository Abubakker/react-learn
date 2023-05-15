import React, {Component} from 'react';

class List extends Component {

    OptionDataList = (data, index) => {
        return <option key={index}>{data}</option>
    }

    render() {
        const country = ['Bangladesh', 'India', 'Nepal', "USA", 'UK', 'China', 'Canada'];
        const dataItems = country.map(this.OptionDataList)
        return (
            <div>
                <select onChange={this.onChangeHandler} className="custom-select mb-4" id="division">
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;