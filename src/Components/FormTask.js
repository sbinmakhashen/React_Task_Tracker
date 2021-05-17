import { useState } from 'react';

const FormTask = ({ addTask }) => {
  // use useState to make form input fields dynamic
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  // method to save new added tasks tasks
  const submit = (e) => {
    // prevent page from refreshing on submit
    e.preventDefault();
    // validate if there is no text
    if (text === '' || date === '') {
      alert('Please add a task and a date');
    }
    // adding the tasks I inserted in the input feild
    addTask({ text, date, reminder });
    // reset input feilds when submittied a task
    setText('');
    setDate('');
    setReminder(false);
  };
  const toggleReminder = () => {
    setReminder([reminder ? !reminder : '']);
  };
  return (
    <form onSubmit={submit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder='Add a task here'
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type='text'
          placeholder='Add a day and time'
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder: </label>{' '}
        <input
          value={reminder}
          type='checkbox'
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input
        type='submit'
        value='Submit task'
        className=' btn btn-block form-submit'
      />
    </form>
  );
};

export default FormTask;
