const Input = ({ name, onChange, value }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>
        {name[0].toUpperCase() + name.slice(1).toLowerCase()}
      </label>
      <input
        type='text'
        className='form-control'
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
