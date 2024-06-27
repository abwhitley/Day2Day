import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./Components/Calendar";
import {users} from "./DataSets/UsersData";

function App() {
    const [user, setUser] = useState(users[0])
  return (
      <>
        <Calendar user={user}/>
      </>
  );
}

export default App;
