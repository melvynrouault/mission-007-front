import React, { useEffect, useState } from 'react';

export default function Task({props, onDelete, onChecked}) {
    useEffect(() => {})

    // ajouter action bouton cliquable
    // Dans cette action, appeler l'api
        // passer le nouvel élément en body (ou props.isCOmpleted)
        // setTask pour dire que telle tâche a été modifié
        // renvoi la nouvelle tache

    return (
        <div className="task">
            <div className="task-infos">
                <p key={props._id}>{props.title}</p>
                <h5>{props.toCompleteBy}</h5>
            </div>
            <button className="deleteButton" onClick={() => onDelete(props._id)}>🗑️</button>
            <button className={props.isCompleted ? 'checkedTask' : 'uncheckedTask'} onClick={() => { onChecked(props._id)}}>{props.isCompleted ? '✅' : "❌" }</button>
        </div>
    )
}