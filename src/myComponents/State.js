import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class StateClass extends Component {

    constructor() {
        super();
        var Myinfo = {
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
        this.state = Myinfo;
    }

    render() {
        return <div>
            <h1 className="mb-5">From State class </h1>
            <h1>My name is {this.state.name}</h1>
            <h2>My age is {this.state.age[0]}</h2>
            <h2>My height is {this.state.height}</h2>
            <h2>My weight is {this.state.weight}</h2>
            <h2>Object= {this.state.a.a3}</h2>
            <h2>Object array= {this.state.a.a1[3]}</h2>
        </div>
    }
}

export default StateClass;