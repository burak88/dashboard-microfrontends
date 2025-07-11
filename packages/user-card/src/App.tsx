import React from 'react';
import { mockUser } from './data/mockData';
import UserCard from './components/UserCard';

const App = () => {

  return (
    <div>
      <h1 className='bg-red-500 flex-1 flex-row justify-center items-center'>User Card Standalone</h1>
       <UserCard user={mockUser} />
    </div>
  );
};

export default App;