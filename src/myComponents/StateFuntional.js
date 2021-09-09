import React, {useEffect, useState} from "react"

const StateFuntional = () => {
    const [name, setName] = useState({
        country: "BD"
    })
    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={() => setName({country: "Bangladesh"})}>Full name</button>
        </div>
    );
};

export default StateFuntional;