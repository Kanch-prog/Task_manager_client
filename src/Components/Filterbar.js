import React from 'react';
import { useTaskContext } from '../Context/TaskContext';
import '../style.css';

function Filterbar() {
    const { handleFilterClick } = useTaskContext();

    return (
        <div className="filterbar">
            <button
                className="filter-button"
                onClick={() => handleFilterClick('all')}
            >
                All
            </button>
            <button
                className="filter-button"
                onClick={() => handleFilterClick('completed')}
            >
                Completed
            </button>
            <button
                className="filter-button"
                onClick={() => handleFilterClick('todo')}
            >
                To Do
            </button>
        </div>
    );
}

export default Filterbar;
