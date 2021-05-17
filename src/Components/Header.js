import Button from './Button';

const Header = ({ toggleBtn, changeOnCLick }) => {
  return (
    <div className='header'>
      <h1>Task Tracker</h1>
      <Button
        onClick={toggleBtn}
        text={changeOnCLick ? 'close' : 'open'}
        color={changeOnCLick ? 'red' : 'green'}
      />
    </div>
  );
};

export default Header;
