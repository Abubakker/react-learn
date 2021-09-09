import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class SignUpForm extends Component {

    constructor() {
        super();
        this.state = {
            fname: " ",
            lname: " ",
            email: " ",
            mobile: " "
        }
    }

    onChangeHandler = (event) => {
        var inputNames = event.target.name;
        var inputValues = event.target.value;
        this.setState({[inputNames]: inputValues});

        if (inputNames === "fname") {
            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if (!namePattern.test(inputValues)) {
                this.setState({fname: "First Name is not valid!"})
            }
        }
        if (inputNames === "lname") {
            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if (!namePattern.test(inputValues)) {
                this.setState({lname: "Last Name is not valid!"})
            }
        }
        if (inputNames === "email") {
            var emailPattern = /\S+@\S+\.\S+/;
            if (!emailPattern.test(inputValues)) {
                this.setState({email: "Email is not valid!"})
            }
        }
        if (inputNames === "mobile") {
            if (!Number(inputValues)) {
                this.setState({mobile: "Phone no. is not valid!"})
            }
        }
    }

    render() {
        return (
            <div>
                <p>Sign up form</p>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone no.: {this.state.mobile}</p>
                <form style={{width: '400px'}} className="mx-auto">
                    <div className="input-group mb-3">
                        <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"
                               className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"
                               className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"
                               className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"
                               className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;