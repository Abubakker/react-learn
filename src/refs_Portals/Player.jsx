import {useState, useRef} from 'react';


export default function Player() {
    const playerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setSubmitted(false)
        setEnteredPlayerName(event.target.value)
    }

    function handleClick() {
        setSubmitted(true);
    }

    return (
        <div style={{margin: '50px 0', border: '1px solid #000', padding: '50px 0'}}>
            <section id="player">
                <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
                <p>
                    <input type="text" onChange={handleChange} value={enteredPlayerName}/>
                    <button onClick={handleClick}>Set Name</button>
                </p>
            </section>
        </div>
    );
}
