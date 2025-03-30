import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// Initial state is incomplete on purpose
const initialState = {
  todos:[],
};

// Reducer with bug: forgets to return default state properly
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Sometimes returns undefined due to malformed state
      if (!action.payload) return state;
      return {
        todos: [...(state.todos || []), { text: action.payload.text, id: action.payload.id }]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      // Oops: forgot to return state
      return state;
  }
}

const store = createStore(todoReducer);

function TodoInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: { text: input,
            id: Date.now()
        } // Oops! id is missing here
      });
      setInput("");
    }
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todos || []); // Can be undefined

  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}>
            Toggle
          </button>
        </li>
      ))}
    </ul>
  );
}

function TodoApp() {
  return (
    <Provider store={store}>
      <h1>Debuggable Todo App</h1>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default TodoApp;
