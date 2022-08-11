import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Pagination from './common/pagination';
import paginate from '../utils/paginate';
import Loading from './common/loading';
import NoteBody from './noteBody';
import AddNoteBtn from './common/addNoteBtn';
import * as NoteService from '../services/NoteService';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pinned, setPinned] = useState(false);
  const [pageSize] = useState(5);

  const getNotes = async () => {
    const result = await NoteService.getNotes();
    setNotes(result);
    setLoading(false);
  };

  const handleDelete = async (note) => {
    let newNotes = notes.filter((n) => n._id !== note._id);
    setNotes(newNotes);
    await NoteService.deleteNote(note);
    toast.success('Note Deleted');
  };

  useEffect(() => {
    getNotes();
  }, [pinned]);

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handlePinNote = async (note) => {
    await NoteService.makePinnedNote(note._id);
    setCurrentPage(1);
    setPinned(true);
    toast.success('Note Pinned');
  };

  const pinnedNotes = notes.filter((note) => note.pinned);
  const unpinnedNotes = notes.filter((note) => !note.pinned);

  const allNotes = [...pinnedNotes, ...unpinnedNotes];

  const paginatedNotes = paginate(allNotes, currentPage, pageSize);

  if (loading) return <Loading />;

  return (
    <div className='notes'>
      <AddNoteBtn />
      <NoteBody
        onDelete={handleDelete}
        onPinNote={handlePinNote}
        notes={paginatedNotes}
      />

      <Pagination
        notes={notes}
        currentPage={currentPage}
        onCurrentPage={handleCurrentPage}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Notes;
