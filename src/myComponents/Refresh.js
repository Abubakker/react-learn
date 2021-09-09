import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class Refresh extends Component {

    constructor() {
        super(); //parent
        this.RefreshNow = this.RefreshNow.bind(this)
    }

    RefreshNow() {
        this.forceUpdate();
    }


    render() {
        return (
            <div>
                <button onClick={this.RefreshNow} className="btn btn-info">Update</button>
                <h1 className="text-success">{Math.random()}</h1>
            </div>
        )
    }
}

export default Refresh;