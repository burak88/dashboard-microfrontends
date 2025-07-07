import React, { Suspense } from 'react';
import './App.css';

const UserCardApp = React.lazy(() => import('userCard/UserCardApp'));
const ContentBarApp = React.lazy(() => import('contentBar/ContentBarApp'));

const App = () => {
  return (
    <div className="shell-app">
      <header className="shell-header">
        <h1>Dashboard Shell</h1>
      </header>
      <main className="shell-main">
        <div className="shell-sidebar">
          <Suspense fallback={<div>Loading User Card...</div>}>
            <UserCardApp />
          </Suspense>
        </div>
        <div className="shell-content">
          <Suspense fallback={<div>Loading Content Bar...</div>}>
            <ContentBarApp />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default App;