import { useState } from 'react';


const useTaskManager = () => {
    const [toDo, setToDo] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    const addTask = () => {
        if (newTask) {
            setToDo((prevToDo) => [
                ...prevToDo,
                { id: prevToDo.length + 1, title: newTask, status: false },
            ]);
            setNewTask('');
        }
    };

    const deleteTask = (id) => {
        setToDo((prevToDo) => prevToDo.filter((task) => task.id !== id));
    };

    const markDone = (id) => {
        setToDo((prevToDo) =>
            prevToDo.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task
            )
        );
    };

    const cancelUpdate = () => {
        setUpdateData('');
    };

    const changeTask = (e) => {
        setUpdateData((prevUpdateData) => ({
            ...prevUpdateData,
            title: e.target.value,
        }));
    };

    const updateTask = () => {
        setToDo((prevToDo) => {
            const updatedObject = [...prevToDo].map((task) =>
                task.id === updateData.id ? updateData : task
            );
            return updatedObject;
        });
        setUpdateData('');
    };

    return {
        toDo,
        newTask,
        setNewTask,
        addTask,
        deleteTask,
        markDone,
        updateTask,
        updateData,
        cancelUpdate,
        changeTask,
        setUpdateData
    };
};

export default useTaskManager;
