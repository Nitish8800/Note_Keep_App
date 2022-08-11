import { useNavigate } from 'react-router-dom';

const AddNoteBtn = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/add')} className='btn btn-primary'>
      Add Note
    </button>
  );
};

export default AddNoteBtn;
