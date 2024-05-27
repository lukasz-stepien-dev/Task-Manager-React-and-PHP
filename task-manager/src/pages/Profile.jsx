import React from 'react';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <h1>Profile</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;
