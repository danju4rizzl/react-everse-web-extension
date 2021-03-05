import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { showSuccessMessage } from '../../utils';
import store from 'store';
import './index.scss';

const TasksWidget = () => {
  const [tasks, setTasks] = useState([]);
  const storageKey = 'Current_tasks';

  useEffect(() => {
    const storedTasks = store.get(storageKey);
    storedTasks && setTasks(storedTasks);
  }, []);

  useEffect(() => {
    store.set(storageKey, tasks);
  }, [tasks]);

  // Delete task from localStorage
  const deleteTask = (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this task');
    confirmDelete && setTasks(tasks.filter((task) => task.id !== id));
    showSuccessMessage('Task has been deleted successfully.');
  };

  // Adds new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="bg1">
      <div className="task">
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default TasksWidget;
