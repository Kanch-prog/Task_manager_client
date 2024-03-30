import './style.css'; // Import custom styles
import React from 'react';
import Filterbar from './Components/Filterbar';
import Navbar from './Components/Navbar';
import { TaskProvider } from './Context/TaskContext';
import Tasks from "./Components/TaskList"

function App() {
    return (
        <>
            <TaskProvider>
                <Navbar />
                <Filterbar />
                <Tasks />
            </TaskProvider>
        </>
    );
}

export default App;
