import React, {Component} from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class DOMrender extends Component {

    myFun() {
        var container = document.getElementById("myName");
        var element = <h1>My name is Md. Abu Bakker Siddique. I am from react DOM</h1>;
        var callback = function () {
            alert("This is a callback function.");
        }
        ReactDOM.render(element, container, callback);
    }

    myFun2() {
        var container2 = document.getElementById("myName2");
        var element2 = <h1>My country name is Bangladesh</h1>;
        var callback2 = function () {
            alert("This is a callback function 2.");
        }
        ReactDOM.hydrate(element2, container2, callback2);
    }

    render() {
        return (
            <div>
                <h1 className="my-5">React DOM render</h1>
                <button onClick={this.myFun} className="btn btn-primary">Update use render</button>
                <h1 id="myName">My name is Bakker</h1>
                <button onClick={this.myFun2} className="btn btn-primary my-4">Update use hydrate</button>
                <h1 id="myName2">My country name is BD</h1>
            </div>
        );
    }
}

export default DOMrender;