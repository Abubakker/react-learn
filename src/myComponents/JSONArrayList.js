import React, {Component} from 'react';

class JsonArrayList extends Component {
    render() {
        const city = [
            {
                city: 'Dhaka',
                zip: 369
            },
            {
                city: 'Rajshahi',
                zip: 6000
            },
            {
                city: 'Khulna',
                zip: 5000
            },
            {
                city: 'Rangpur',
                zip: 2000
            },
        ];

        const cityDetails = city.map((data) => {
            return <option>{data.city} ({data.zip})</option>
        })

        return (
            <div>
                <select className="custom-select mb-4" id="city">
                    {cityDetails}
                </select>
            </div>
        );
    }
}

export default JsonArrayList;