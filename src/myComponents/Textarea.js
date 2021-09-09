import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Textarea extends Component {

    constructor() {
        super();
        this.state = {
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            userInput: " "
        }
    }

    onChangeHandler = (event) => {
        var inputTextareaValue = event.target.value;
        this.setState({userInput: inputTextareaValue});
    }

    render() {
        return (
            <div>
                <p>{this.state.userInput}</p>
                <textarea onChange={this.onChangeHandler} placeholder="Your message"></textarea>
            </div>
        );
    }
}

export default Textarea;