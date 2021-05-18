import Task from './Task';
const Tasks = ({ tasks, deleteT, reminder }) => {
  return tasks.map((task, index) => (
    <Task key={index} task={task} onDelete={deleteT} reminder={reminder} />
  ));
};

export default Tasks;
