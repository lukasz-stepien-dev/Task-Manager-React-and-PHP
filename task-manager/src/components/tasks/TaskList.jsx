import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../../api/api';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTasks();
            setTasks(response);
        };
        fetchTasks();
    }, []);

    const handleDelete = async (taskId) => {
        await deleteTask(taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TaskList;
