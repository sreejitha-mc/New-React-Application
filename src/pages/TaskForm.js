import React from 'react';

const TaskForm = ({ newTask, setNewTask, addTask, updateData, changeTask, updateTask, cancelUpdate }) => {
    const handleSubmit = (e) => {
        console.log('e', e)
        e.preventDefault();
        if (updateData) {
            updateTask();
        } else {
            addTask();
        }
    };

    return (
        <>
            {/* Task Form */}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input
                            value={updateData ? updateData.title : newTask}
                            onChange={(e) => updateData ? changeTask(e) : setNewTask(e.target.value)}
                            className="form-control form-control-lg"
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-lg btn-success">
                            {updateData ? 'Update' : 'Add Task'}
                        </button>
                        {updateData && (
                            <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            </form >
            <br />
        </>
    );
};

export default TaskForm;
