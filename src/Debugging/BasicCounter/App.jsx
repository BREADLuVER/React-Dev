import React, { useState, useEffect } from "react";
import { useCounterHooks } from "../../hooks/counterHook";
// src\hooks\counterHook.jsx
export default function DebugCounter() {
    const {count, increment, reset } = useCounterHooks(0);

    useEffect(() => {
        console.log('updated count after render:', count);
    }, [count]);
    
    const handleClick = () => {
        if (count === 5) {
            alert("Max count reached");
            reset();
        } else {
            increment();
        }
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
