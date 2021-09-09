import React from 'react';

function Hello(props) {

    function DoThis(a) {
        alert(a);
    }

    return (
        <div>
            <button onClick={DoThis.bind(this, "Data from functional component...")}>Click here</button>
            <h2>Name: {props.name} (age={props.age})</h2>
        </div>
    )

}

export default Hello;