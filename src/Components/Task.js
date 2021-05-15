import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
const Task = ({ task, onDelete, reminder }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => reminder(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FontAwesomeIcon
          icon={faWindowClose}
          style={{ color: 'red' }}
          // deleting task onClick
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
