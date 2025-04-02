import React, { createContext, useContext, useReducer } from "react";
import { undoRedoReducer, initialState } from "./reducer";

const UndoRedoContext = createContext(null);

export const useDispatch = () => {
    const context = useContext(UndoRedoContext);
    if (!context) throw new Error("useDispatch must be used within Provider");
    return context.dispatch;
  };
  
  export const useSelector = (selector) => {
    const context = useContext(UndoRedoContext);
    if (!context) throw new Error("useSelector must be used within Provider");
    return selector(context.state);
  };
  
  export const UndoRedoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(undoRedoReducer, initialState);
    return (
      <UndoRedoContext.Provider value={{ state, dispatch }}>
        {children}
      </UndoRedoContext.Provider>
    );
  };