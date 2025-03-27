import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./styles.css";

export default function TodoListR() {
  const { todos, dispatch } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: inputValue.trim() });
      setInputValue("");
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            return setInputValue(e.target.value);
          }}
          placeholder="Add a todo..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button
                className="remove-button"
                onClick={() => {
                  return handleRemove(todo.id);
                }}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
