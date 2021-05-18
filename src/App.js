import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState, useEffect } from 'react';
import FormTask from './Components/FormTask';
function App() {
  const [showForm, setShowForm] = useState(true);
  const [reminder, setReminder] = useState(false);
  // JSON Array fo tasks
  const [tasks, setTasks] = useState([]);

  // fetching atsks from json server
  useEffect(() => {
    // showing Tasks in the UI
    const tasksAsync = async () => {
      const getTasks = await fetchTasks();
      setTasks(getTasks);
    };

    tasksAsync();
  }, []);
  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  // Fetch task for updating reminder
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  // Delete task
  const deleteTask = async (id) => {
    // deleting from the UI
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // show reminder if reminder is set to true
  const showReminder = async (id) => {
    const passData = await fetchTask(id);
    const reminderInUi = { ...passData, reminder: !passData.reminder };
    // update response
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(reminderInUi),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  // Add a task on submit
  const addTask = async (task) => {
    // Adding a task in the json file
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    // adding the tasks from server to the UI
    setTasks([...tasks, data]);
    // // creating an id prop to increment in every task we add
    // const id = Math.floor(Math.random() * 20000) + 1;

    // // hold tasks in a const
    // const newTasks = { id, ...task };
    // //adding new task to the tasks
    // setTasks([...tasks, newTasks]);
  };

  return (
    <div className='container'>
      <Header
        toggleBtn={() => setShowForm(!showForm)}
        changeOnCLick={showForm}
      />
      {showForm && <FormTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteT={deleteTask} reminder={showReminder} />
      ) : (
        'No Tasks Found'
      )}
    </div>
  );
}

export default App;
