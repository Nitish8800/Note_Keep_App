const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} id='form'>
      {children}
    </form>
  );
};

export default Form;
