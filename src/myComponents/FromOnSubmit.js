import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class FromOnSubmit extends Component {

    constructor() {
        super();
        this.state = {
            username: " "
        }
    }

    onChangeHandler = (event) => {
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]: myvalue});
    }

    onSubmitHandler = () => {
        alert(this.state.username)
        // var myname = event.target.name;
        // var myvalue = event.target.value;
        // this.setState({[myname]: myvalue});
    }

    render() {
        return (
            <div>
                <form className="my-3 mx-auto" onSubmit={this.onSubmitHandler}>
                    <p>First form onSubmitHandler</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} className="d-block mx-auto" type="text"
                           placeholder="Your Name"/>
                    <input className="d-block mx-auto my-3" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default FromOnSubmit;