import React from 'react';
import './App.css';
import UserList from './components/userlist.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div className="App">
    <Navbar />
      
      {/* <h1>user list</h1> */}
     
      <UserList />
    </div>
  );
}

export default App;
