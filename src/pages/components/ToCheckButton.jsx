import React from 'react'

export default function ToCheckButton({props, onChecked}) {
    console.log("au revoir")
    // state
    // behavior
    // display
    return (
        <button className={props.isCompleted ? 'checkedTask' : 'uncheckedTask'} onClick={() => onChecked(props._id)}>X</button>
    )
}