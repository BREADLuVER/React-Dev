import React, { useState } from "react";

const withCounter = (WrappedComp) => {
    const Counter = (prop) => {
        const [count, setCount] = useState(0)

        const incrementCount=()=> {
            setCount(prev => prev+1)
        }

        return (
            <WrappedComp
                count={count}
                incrementCount={incrementCount}
                {...prop}
            />
        )
    }

    return Counter
}

export default withCounter