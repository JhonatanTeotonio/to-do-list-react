import React from "react";
import {CgClose, CgInfo} from 'react-icons/cg'
import { useHistory } from "react-router-dom";

import './Task.css'

//o handleTaskClick tá com uma arrow function pq senão ele faz a ação antes do click
const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();
    console.log(history)

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    }
    return(
        <div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}><CgClose /></button>
                <button className="see-task-details-button" onClick={handleTaskDetailsClick}><CgInfo /></button>
            </div>
        </div>
    )
};

export default Task;