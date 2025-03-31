import React, { createContext, useReducer } from "react";

const FitnessContext = createContext();

const initialState = {
  goals: JSON.parse(localStorage.getItem("fitnessGoals")) || [],
  completedGoals: JSON.parse(localStorage.getItem("completedGoals")) || [],
};

const fitnessReducer = (state, action) => {
  let updatedGoals;
  let updatedCompleted;

  switch (action.type) {
    case "ADD_GOAL": {
      updatedGoals = [...state.goals, action.payload];
      localStorage.setItem("fitnessGoals", JSON.stringify(updatedGoals));
      return {
        ...state,
        goals: updatedGoals,
      };
    }

    case "COMPLETE_GOAL": {
      const completedGoal = state.goals.find(goal => goal.id === action.payload);
      updatedGoals = state.goals.filter(goal => goal.id !== action.payload);

      updatedCompleted = [completedGoal, ...state.completedGoals].slice(0, 5);

      localStorage.setItem("fitnessGoals", JSON.stringify(updatedGoals));
      localStorage.setItem("completedGoals", JSON.stringify(updatedCompleted));

      return {
        ...state,
        goals: updatedGoals,
        completedGoals: updatedCompleted,
      };
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
