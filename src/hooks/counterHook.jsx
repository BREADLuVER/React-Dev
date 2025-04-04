import { useState } from "react";

export function useCounterHooks(initialState = 0){
    const [count, setCount] = useState(initialState)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const reset = () => {
        setCount(initialState)
    }

    return {
        count,
        increment,
        reset,
    }
}