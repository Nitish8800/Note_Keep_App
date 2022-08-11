import Input from './input';

const renderInput = (name, value, onChange) => {
  return <Input name={name} value={value} onChange={onChange} />;
};

export const renderBtn = (onDisable, text) => {
  return (
    <button disabled={onDisable} className='btn btn-info my-2'>
      {text}
    </button>
  );
};

export default renderInput;
