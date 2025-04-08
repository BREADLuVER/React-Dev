import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({count, incrementCount}) => {
    return (
        <button 
            onClick={incrementCount} 
            onMouseOver={incrementCount}
        >
            clicked {count} times
        </button>
    )
}

export default withCounter(ClickCounter)