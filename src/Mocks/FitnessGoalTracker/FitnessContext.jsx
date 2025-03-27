import React, { createContext, useReducer } from "react";

const FitnessContext = createContext();

const initialState = {
  goals: [],
};

const fitnessReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GOAL": {
      return {
        ...state,
        goals : [...state.goals, action.payload],
      };
    }
    case "REMOVE_GOAL": {
        return {
            ...state,
            goals : state.goals.filter(goals => goals.id !== action.payload)
        }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const FitnessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fitnessReducer, initialState);

  return (
    <FitnessContext.Provider value={{ state, dispatch }}>
      {children}
    </FitnessContext.Provider>
  );
};

export { FitnessContext, FitnessProvider };
