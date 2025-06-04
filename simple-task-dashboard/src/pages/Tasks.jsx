import React, { useState } from 'react';
import '../styles/tasks.css';

function Tasks() {
    // State for the list of tasks
    const [tasks, setTasks] = useState([
        { id: 1, text: "Finish React project", completed: true },
        { id: 2, text: "Start new feature", completed: false },
        { id: 3, text: "Review pull requests", completed: false }
    ]);
    // State for the new task input
    const [newTask, setNewTask] = useState("");

    // Add a new task to the list
    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        setTasks([
            ...tasks,
            { id: Date.now(), text: newTask, completed: false }
        ]);
        setNewTask("");
    };

    // Toggle the completed status of a task
    const handleToggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Delete a task from the list
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <main className="tasks-main">
            {/* Tasks page header and input */}
            <section className="tasks-header">
                <h2>Your Tasks</h2>
                <p>Manage your tasks below. Add, complete, or delete them!</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "10px" }}>
                    <input
                        type="text"
                        className="task-input"
                        placeholder="Add a new task..."
                        value={newTask}
                        onChange={e => setNewTask(e.target.value)}
                        onKeyDown={e => { if (e.key === "Enter") handleAddTask(); }}
                    />
                    <button className="add-task-button" onClick={handleAddTask}>+ Add Task</button>
                </div>
            </section>
            {/* Tasks list section */}
            <section className="tasks-list-section">
                <h3>Task List</h3>
                <ul className="tasks-list">
                    {/* Show message if there are no tasks */}
                    {tasks.length === 0 && (
                        <li style={{ color: "#888", fontStyle: "italic" }}>No tasks yet.</li>
                    )}
                    {/* Render each task */}
                    {tasks.map(task => (
                        <li
                            key={task.id}
                            className={`task-item${task.completed ? " completed" : ""}`}
                        >
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => handleToggleComplete(task.id)}
                                title="Toggle complete"
                            >
                                {task.completed ? "✅ " : "⬜ "}
                                {task.text}
                            </span>
                            <button
                                className="delete-task-button"
                                onClick={() => handleDeleteTask(task.id)}
                                title="Delete task"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Tasks;