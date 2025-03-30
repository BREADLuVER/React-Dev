import React, { useEffect, useContext, useReducer } from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
}

const store = createStore(todoReducer);

function TodoInput() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput(""); // reset input
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => dispatch({ type: "TOGGLE_TODO", index: i })}>
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
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default TodoApp;
