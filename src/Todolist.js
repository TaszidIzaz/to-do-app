    import React, { useState } from 'react';
    import './App.css';

    const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = (event) => {
        event.preventDefault();
        if (newTask.trim() !== '') {
        setTasks([...tasks, { task: newTask, completed: false }]);
        setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const toggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list-container">
        <form onSubmit={addTask}>
            <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a task"
            />
            <button type="submit">Add Task</button>
        </form>
        <ul>
            {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
                />
                <span className="task-text">{task.task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default TodoList;
