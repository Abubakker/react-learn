import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Welcome extends Component {

    doThisButton(a) {
        alert(a);
    }

    render() {
        return <div>
            <button onClick={this.doThisButton.bind(this, "Data from class component...")}>Click here from class
                component
            </button>
            <h1>I am form class component {this.props.class}</h1>
            <button className="btn btn-primary m-5">Use bootstrap 5</button>
        </div>
    }
}

export default Welcome;