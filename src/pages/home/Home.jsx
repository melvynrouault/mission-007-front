import { useEffect, useState } from "react"
import './style.scss';
import Task from "../components/Task";
import AddTask from "../components/AddTask";

export default function Home() {
    //state
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)
            .then(response => response.json())
            .then(
                (response) => {
                    setTasks(response); 
                },
                (error) => {
                    console.error('Erreur lors de la récupération des données:', error);
                }
            )
        }, []);
    
    
    //behavior
    const handleCheck = (id) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isCompleted: true })
        }

        fetch(`http://localhost:5000/tasks/${id}`, requestOptions )
            .then(response => response.json())
            .then(
                (response) => {
                    const newTasks = tasks.map((task) => {
                        if (task._id === id) {
                          const updatedTask = {
                            ...task,
                            isCompleted: true,
                          };
                  
                          return (
                            updatedTask
                            );
                        }
                  
                        return task;
                      });
                  
                      setTasks(newTasks);
                },

                (error) => {
                    console.error('Erreur lors de la récupération des données:', error);
                }
            )
    }

    const handleDelete = (id) => {
        console.log("id in delete " + id)
        fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
            .then((res) => res.json())
            .then(
            () => {
                // Met à jour la liste des tâches après la suppression réussie
                const tasksCopyUpdated = tasks.filter((task) => task._id !== id)
                setTasks(tasksCopyUpdated)
                console.log('Tâche supprimée');
            },
            (error) => {
                console.error('Erreur lors de la suppression des données', error);
            }
        );
    }

    const handleAdd = (newTask) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        }

        fetch('http://localhost:5000/tasks/', requestOptions)
            .then((response) => response.json())
            .then(
                (response) => {
                    // copy
                    const tasksCopy = [...tasks];
                    // manip
                    tasksCopy.push(response)

                    setTasks(tasksCopy)
                }
            )
        
    }

    //render
    return(
        <div className="homeContainer">
            <p>Home</p>
            <div className="tasks">
                {
                    tasks.map(task => (
                        <Task props={task} onDelete={handleDelete} onChecked={handleCheck}/>
                    ))
                }

            </div>
            <AddTask handleAdd={handleAdd}/>

        </div>
    )
}
