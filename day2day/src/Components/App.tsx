import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import SingleDate from "./SingleDate";
// import CalendarDisplay from "./CalendarDisplay";
// import TaskDisplay from "./TaskDisplay";
import {users, UsersData} from "../DataSets/UsersData";
import Calendar from "./Calendar";

function App() {
    const [currentUser, setCurrentUser] = useState<UsersData>(users[0])
    return (
        <div>
            <Calendar user={currentUser} />
        </div>
    );
}

export default App;
