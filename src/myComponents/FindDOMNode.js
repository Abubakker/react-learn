import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FindDomNode extends Component {

    changeIMG() {
        var imgID = document.getElementById("imgID");
        ReactDOM.findDOMNode(imgID).src = "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/54432321_2090245107760828_6962677985849638912_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=5QLcfI_MswsAX8NBR0_&tn=85DUMvXasTZ5HU0Y&_nc_ht=scontent.fdac24-1.fna&oh=45ae7f9935a42e3657b34e81fee48a06&oe=614AE4A7";
    }

    render() {
        return (
            <div>
                <img alt="your image" id="imgID" className="img img-fluid d-block mx-auto" style={{width: '200px'}}
                     src="https://scontent.fdac68-1.fna.fbcdn.net/v/t1.6435-9/53287808_2061981953920477_8710088556963430400_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=8X5hAUBt_xQAX_tZREY&_nc_ht=scontent.fdac68-1.fna&oh=c0cffa6adfbdf1e96ac0cecf4de8888d&oe=6133A56A"></img>
                <button onClick={this.changeIMG} className="btn btn-success my-4">Change the photo</button>
            </div>
        );
    }
}

export default FindDomNode;