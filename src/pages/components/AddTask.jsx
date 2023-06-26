import React, { useState } from 'react';

export default function AddTask({handleAdd}) {

    // state
    const [newTask, setNewTask] = useState({title:"", toCompleteBy:"Avant la fin "});

    // behavior
    const handleChange = (event) => {
        setNewTask({...newTask, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(newTask);
        setNewTask({title:"", toCompleteBy:"Avant la fin "})
    }
    
    // render

    return(
        <form onSubmit={(handleSubmit)}>

            <input 
            type="text" 
            placeholder="Je dois..."
            name='title'
            value={newTask.title}
            onChange={handleChange} />

            <input 
            type="text"
            placeholder="Avant..."
            name='toCompleteBy'
            value={newTask.toCompleteBy}
            onChange={handleChange}
             />
            <button>Ajouter une tâche</button>
        </form>
    )
}