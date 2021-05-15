import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from 'react';
function App() {
  const [reminder, setReminder] = useState(false);

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
      date: 'around May to late May. Date is unknown',
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
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // show reminder if reminder is set to true
  const showReminder = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} deleteT={deleteTask} reminder={showReminder} />
    </div>
  );
}

export default App;
