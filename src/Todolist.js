    import React, { useState } from 'react';
    import './App.css';



    const Task = ({ task, deleteTask }) => {
    return (
        <li>
        {task}
        <button className='button' onClick={deleteTask}>Delete</button>
        </li>
    );
    };


    const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');


    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };


    const addTask = (event) => {
        event.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask('');
        
    };


    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1); // FIlter Can be used to remove too
        setTasks(updatedTasks);
    };

    return (
        <div>
        <form onSubmit={addTask}>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button className='button2' type="submit">Add a Task</button>
        </form>
        <ul>
            {tasks.map((task, index) => (
            <Task
                key={index}
                task={task}
                deleteTask={() => deleteTask(index)}
            />
            ))}
        </ul>
        </div>
    );
    };

    export default TodoList;
