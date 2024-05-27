import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Task Manager</h1>
            <Link to="/tasks">View Tasks</Link>
            <Link to="/add-task">Add Task</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
};

export default Home;
