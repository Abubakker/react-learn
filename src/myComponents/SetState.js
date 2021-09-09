import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class SetState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Md. Abu Bakker Siddique",
            age: [28, 20, 10, 30, 40, 50],
            height: '5 feet 6 inch',
            weight: "62 KG",
            a: {
                a0: "a",
                a1: ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb'],
                a2: "c",
                a3: "d",
                a4: "e",
            }

        }
    }

    ChangeName(a) {
        this.setState({name: a});
    }

    render() {
        return <div>
            <h1 className="my-5">From SetState class </h1>
            <h1>My name is {this.state.name}</h1>
            <button className="btn btn-success my-4" onClick={this.ChangeName.bind(this, "Abu bakker")}>Change my name
            </button>
        </div>
    }
}

export default SetState;