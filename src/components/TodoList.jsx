import React, { useState } from 'react';
import './todolistStyle.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const AddTask = () => {
        if (newTask !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        } else {
            alert("Task cannot be empty!");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="">
                <div className='todo_container'>
                    <h1>To-Do-List</h1>
                    <input 
                        type="text" 
                        value={newTask} 
                        onChange={(e) => setNewTask(e.target.value)} 
                        className="inp"
                    />
                    <button onClick={AddTask}>Add</button>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {task}
                                <button onClick={() => removeTask(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TodoList;
