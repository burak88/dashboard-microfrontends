import React from 'react';
import UserCard from './components/UserCard';
import { mockUser } from "./data/mockData"

const App = () => {
  return (
    <div>
      <h1>User Card Standalone</h1>
        <UserCard user={mockUser} />
    </div>
  );
};

export default App;