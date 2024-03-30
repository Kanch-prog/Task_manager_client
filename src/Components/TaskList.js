import React, { useState } from 'react';
import { useTaskContext } from '../Context/TaskContext';
import DeleteModal from '../Modals/DeleteModal';
import EditModal from '../Modals/EditModal';
import '../style.css';

function TaskList() {
    const { filteredTasks, updateTaskStatus } = useTaskContext();
    const [taskId, setTaskId] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const handleDelete = (taskId) => {
        setTaskId(taskId);
        setIsDeleteModalOpen(true);
        setOpenDropdownId(null);
    };

    const handleEdit = (taskId, taskTitle, taskDescription) => {
        setTaskId(taskId);
        setTaskTitle(taskTitle);
        setTaskDescription(taskDescription);
        setIsEditModalOpen(true);
        setOpenDropdownId(null);
    };

    const handleComplete = (taskId) => {
        updateTaskStatus(taskId, 'completed');
        setOpenDropdownId(null);
    };

    const toggleDropdown = (taskId) => {
        setOpenDropdownId(openDropdownId === taskId ? null : taskId);
    };

    const isDropdownOpen = (taskId) => {
        return openDropdownId === taskId;
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'todo':
                return 'status-todo';
            case 'completed':
                return 'status-completed';
            default:
                return 'status-default';
        }
    };

    return (
        <div className="my-8 task-grid">
            {filteredTasks.map(task => (
                <div key={task._id} className={`task-container ${getStatusColor(task.status)}`}>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="task-title">{task.title}</h3>
                            <button onClick={() => toggleDropdown(task._id)} className="dropdown-button">
                                <svg className="dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <p className="task-description">{task.description}</p>
                    </div>
                    {isDropdownOpen(task._id) && (
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => handleEdit(task._id, task.title, task.description)}>Edit</button>
                            <button className="dropdown-item delete" onClick={() => handleDelete(task._id)}>Delete</button>
                            {task.status !== 'completed' && (
                                <button className="dropdown-item" onClick={() => handleComplete(task._id)}>Mark as Completed</button>
                            )}
                        </div>
                    )}
                </div>
            ))}
            <DeleteModal isOpen={isDeleteModalOpen} closeModal={() => setIsDeleteModalOpen(false)} taskId={taskId} />
            <EditModal isOpen={isEditModalOpen} closeModal={() => setIsEditModalOpen(false)} taskId={taskId} initialTitle={taskTitle} initialDescription={taskDescription} />
        </div>
    );
}

export default TaskList;
