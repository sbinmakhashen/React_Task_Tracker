import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState, useEffect } from 'react';
import FormTask from './Components/FormTask';
function App() {
  const [showForm, setShowForm] = useState(true);
  // const [reminder, setReminder] = useState(false);
  // JSON Array fo tasks
  const [tasks, setTasks] = useState([]);

  // fetching atsks from json server
  useEffect(() => {
    // showing Tasks in the UI
    const showTasks = async () => {
      await fetchTasks();
      setTasks(showTasks);
    };
    showTasks();
  }, []);
  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log(data);
    return data;
  };
  // Delete task
  const deleteTask = async (id) => {
    // deleting from the UI

    setTasks(tasks.filter((task) => task.id !== id));
  };
  // show reminder if reminder is set to true
  const showReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  // Add a task on submit
  const addTask = (task) => {
    // hold tasks in a const
    const newTasks = { ...task };
    //adding new task to the tasks
    setTasks([...tasks, newTasks]);
  };

  return (
    <div className='container'>
      <Header
        toggleBtn={() => setShowForm(!showForm)}
        changeOnCLick={showForm}
      />
      {showForm && <FormTask addTask={addTask} />}
      {tasks ? (
        <Tasks tasks={tasks} deleteT={deleteTask} reminder={showReminder} />
      ) : (
        'No Tasks Found'
      )}
    </div>
  );
}

export default App;
