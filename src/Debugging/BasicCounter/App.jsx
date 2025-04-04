import React, { useState, useEffect } from "react";

export default function DebugCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('updated count after render:', count);
    }, [count]);
    
    const handleClick = () => {
        if (count === 5) {
            alert("Max count reached");
            setCount(0); // reset
        } else {
            setCount(prev => prev + 1);
        }
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
