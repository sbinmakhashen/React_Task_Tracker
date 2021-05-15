const Header = () => {
  return (
    <div className='header'>
      <h1>Task Tracker</h1>
      <button
        className='btn'
        style={{ backgroundColor: 'green', fontWeight: 'bold' }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
