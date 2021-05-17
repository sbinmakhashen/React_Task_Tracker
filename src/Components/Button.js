const Button = ({ onClick, text, color }) => {
  return (
    <div>
      <button onClick={onClick} className='btn' style={{ background: color }}>
        {text}
      </button>
    </div>
  );
};

export default Button;
