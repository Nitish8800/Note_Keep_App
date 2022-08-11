import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from './common/form';
import Loading from './common/loading';
import renderInput from './common/renderInput';
import { renderBtn } from './common/renderInput';
import { disabledBtn } from './common/disabledBtn';
import * as NoteService from '../services/NoteService';

const UpdateNote = () => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const getNote = async () => {
    try {
      const note = await NoteService.getNote(id);
      setTitle(note.title);
      setTagline(note.tagline);
      setBody(note.body);
      setLoading(false);
    } catch (ex) {
      if (ex.response && ex.response.status === 500) {
        toast.error(ex.response.data);
        navigate('/');
      }
    }
  };

  useEffect(() => {
    getNote();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await NoteService.updateNote(id, title, tagline, body);
      navigate('/');
      toast.success('Note Updated');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <Form onSubmit={handleSubmit}>
      {renderInput('title', title, (e) => setTitle(e.currentTarget.value))}
      {renderInput('tagline', tagline, (e) =>
        setTagline(e.currentTarget.value)
      )}
      {renderInput('body', body, (e) => setBody(e.currentTarget.value))}
      {renderBtn(disabledBtn(title, tagline, body), 'Update')}
    </Form>
  );
};

export default UpdateNote;
