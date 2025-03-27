import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nextId++, title, done: false },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === nextTodo.id
          ? { ...todo, title: nextTodo.title, done: nextTodo.done }
          : todo
      )
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
