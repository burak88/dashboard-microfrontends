import React, { useState } from 'react';
import './UserCard.css';

const UserCardApp = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/80x80',
    status: 'Online'
  });

  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={user.avatar} alt={user.name} />
        <span className="user-status">{user.status}</span>
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button className="user-btn">View Profile</button>
      </div>
    </div>
  );
};

export default UserCardApp;