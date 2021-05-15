import Task from './Task';
const Tasks = ({ tasks, deleteT, reminder }) => {
  return tasks.map((task) => (
    <Task key={task.id} task={task} onDelete={deleteT} reminder={reminder} />
  ));
};

export default Tasks;
