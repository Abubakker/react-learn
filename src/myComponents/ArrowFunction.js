import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertFunction = (a) => {
    alert(a)
}

const ArrowFunction = () => {
    return (
        <button onClick={AlertFunction.bind(this, "Oh no! I am from arrow function.")} className="btn btn-primary my-5">Arrow Funtion button</button>
    )
}

export default ArrowFunction;