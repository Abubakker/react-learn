import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class VariableElement extends Component {

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
        return (
            this.state.login ?
                (<div className=" d-block">
                    <button onClick={this.ConditionalIfElseUpdate.bind(this, false)}
                            className="btn btn-danger my-4">Sign out
                        now
                    </button>
                </div>) :
                (<div className=" d-block">
                    <button onClick={this.ConditionalIfElseUpdate.bind(this, true)}
                            className="btn btn-success my-4">Sign in
                        now
                    </button>
                </div>)
        )
        // if (this.state.login == true) {
        //     return <button onClick={this.ConditionalIfElseUpdate.bind(this, false)} className="btn btn-danger my-4">Log
        //         out now</button>
        // } else {
        //     return <button onClick={this.ConditionalIfElseUpdate.bind(this, true)} className="btn btn-success my-4">Log
        //         in now</button>
        // }
    }
}

export default VariableElement;