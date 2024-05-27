const API_URL = 'http://localhost/backend/';

export const register = async (userData) => {
    const response = await fetch(`${API_URL}auth/register.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const login = async (userData) => {
    const response = await fetch(`${API_URL}auth/login.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const getTasks = async () => {
    const response = await fetch(`${API_URL}tasks/get_tasks.php`);
    return response.json();
};

export const addTask = async (taskData) => {
    const response = await fetch(`${API_URL}tasks/add_task.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
    return response.json();
};

export const updateTask = async (taskId, taskData) => {
    const response = await fetch(`${API_URL}tasks/update_task.php?id=${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
    return response.json();
};

export const deleteTask = async (taskId) => {
    const response = await fetch(`${API_URL}tasks/delete_task.php?id=${taskId}`, {
        method: 'DELETE',
    });
    return response.json();
};