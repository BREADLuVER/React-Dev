import React, { useState } from "react";

export default function DebugTodoApp() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [input, setInput] = useState("");
    const nextId = useRef(1);
    
    const handleAddTask = () => {
        if (!input) return;

        const newTask = {
            id: nextId.current++,
            text: input,
            completed: false,
        };

        setTasks(prev => [...prev, newTask]);
        setInput("");
    };

    const handleToggleTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = {...task, completed: !task.completed};
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    return (
        <div>
            <h1>Todo List</h1>

            <input
                name = "task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask}>Add</button>

            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("active")}>Active</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>

            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <label>
                            <input
                                name="filtered-tasks"
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleTask(task.id)}
                            />
                            {task.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
