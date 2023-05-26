import TaskForm from './TaskForm.js';
import ToDo from './Todo-list.js';
import useTaskManager from '../../logic/useTaskManager.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function Todolist() {
  const {
    toDo,
    newTask,
    addTask,
    deleteTask,
    markDone,
    updateTask,
    updateData,
    cancelUpdate,
    changeTask,
    setNewTask,
    setUpdateData
  } = useTaskManager();

  return (
    <div className="container App">
      <br /><br />
      <h2>To Do List App</h2>
      <br /><br />

      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />

      {/* Display ToDos */}
      {toDo.length ? (
        <ToDo
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
      ) : (
        'No Tasks...'
      )}
    </div>
  );
}

export default Todolist;
