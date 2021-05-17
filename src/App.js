import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from 'react';
import FormTask from './Components/FormTask';
function App() {
  const [showForm, setShowForm] = useState(true);
  // const [reminder, setReminder] = useState(false);

  // JSON Array fo tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Walk in the park',
      date: 'May 15th at 10AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Get braces',
      date: 'around May to late May Date is unknown',
      reminder: false,
    },
    {
      id: 3,
      text: 'Take breaks',
      date: 'May 15th after every 30 minutes',
      reminder: true,
    },
  ]);
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
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteT={deleteTask} reminder={showReminder} />
      ) : (
        'No Tasks Found'
      )}
    </div>
  );
}

export default App;
