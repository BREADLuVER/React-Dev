import React, { createContext, useReducer } from "react";

const FitnessContext = createContext();

const initialState = {
  goals: JSON.parse(localStorage.getItem("fitnessGoals")) || [],
};

const fitnessReducer = (state, action) => {
  let updatedGoals;

  switch (action.type) {
    case "ADD_GOAL": {
      updatedGoals = [...state.goals, action.payload]
      localStorage.setItem("fitnessGoals", JSON.stringify(updatedGoals))
      return {
        ...state,
        goals : updatedGoals,
      };
    }
    case "REMOVE_GOAL": {
        updatedGoals = state.goals.filter(goal => goal.id !== action.payload)
        localStorage.setItem("fitnessGoals", JSON.stringify(updatedGoals))
        return {
            ...state,
            goals : updatedGoals
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
