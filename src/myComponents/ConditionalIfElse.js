import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class ConditionalIfElse extends Component {

    constructor() {
        super();
        this.state = {
            login: true
        }
    }

    ConditionalIfElseUpdate(a) {
        this.setState({login: a});
    }


    render() {
        if (this.state.login === true) {
            return <div className=" d-block">
                <button onClick={this.ConditionalIfElseUpdate.bind(this, false)} className="btn btn-danger my-4">Log
                    out now
                </button>
            </div>
        } else {
            return <div className=" d-block">
                <button onClick={this.ConditionalIfElseUpdate.bind(this, true)} className="btn btn-success my-4">Log
                    in now
                </button>
            </div>
        }
    }
}

export default ConditionalIfElse;