import React, { useState } from 'react';
import AddTaskModal from '../Modals/AddTaskModal';
import '../style.css'; 

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div>
                    <span className="logo">Task Manager</span>
                </div>

                <div>
                    <button className="add-btn" onClick={openModal}>
                        Add
                    </button>
                </div>
            </div>
            <AddTaskModal isOpen={isModalOpen} closeModal={closeModal} />
        </nav>
    );
}

export default Navbar;
