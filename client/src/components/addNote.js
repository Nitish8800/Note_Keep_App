import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from './common/form';
import renderInput from './common/renderInput';
import { renderBtn } from './common/renderInput';
import { disabledBtn } from './common/disabledBtn';
import * as NoteService from '../services/NoteService';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await NoteService.addNote(title, tagline, body);
      navigate('/');
      toast.success('Note Added');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {renderInput('title', title, (e) => setTitle(e.currentTarget.value))}
      {renderInput('tagline', tagline, (e) =>
        setTagline(e.currentTarget.value)
      )}
      {renderInput('body', body, (e) => setBody(e.currentTarget.value))}
      {renderBtn(disabledBtn(title, tagline, body), 'Submit')}
    </Form>
  );
};

export default AddNote;
