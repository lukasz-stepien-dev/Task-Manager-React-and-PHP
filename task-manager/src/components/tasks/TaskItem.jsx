import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, onDelete }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.due_date}</p>
            <p>{task.status}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
    );
};

export default TaskItem;
