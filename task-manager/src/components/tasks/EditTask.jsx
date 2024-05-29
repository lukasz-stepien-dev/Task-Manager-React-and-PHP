import React, { useState, useEffect } from 'react';
import { updateTask, getTasks } from '../../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
    const [task, setTask] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            const tasks = await getTasks();
            const taskToEdit = tasks.find(task => task.id === parseInt(id));
            setTask(taskToEdit);
        };
        fetchTask();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTask(id, task);
        navigate('/');
    };

    if (!task) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                required
            />
            <textarea
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                required
            />
            <input
                type="date"
                value={task.due_date}
                onChange={(e) => setTask({ ...task, due_date: e.target.value })}
                required
            />
            <select
                value={task.status}
                onChange={(e) => setTask({ ...task, status: e.target.value })}
                required
            >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <button type="submit">Update Task</button>
        </form>
    );
};

export default EditTask;
