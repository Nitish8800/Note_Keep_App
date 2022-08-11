import { useNavigate } from 'react-router-dom';

const NoteBody = ({ onDelete, onPinNote, notes }) => {
  const navigate = useNavigate();

  return (
    <div className='row'>
      {notes.map((note) => (
        <div className='col-lg-4 my-2' key={note._id}>
          <div
            className='card'
            style={{ background: note.pinned ? '#bdc3c7' : 'null' }}
          >
            <div className='card-body'>
              <h2 className='card-title d-flex justify-content-between'>
                {note.title}
                <span
                  onClick={() => onDelete(note)}
                  className='btn btn-outline-danger btn-sm'
                >
                  Delete
                </span>
                <span
                  onClick={() => navigate(`/update/${note._id}`)}
                  className='btn btn-outline-secondary btn-sm'
                >
                  Update
                </span>
                {!note.pinned ? (
                  <span
                    onClick={() => onPinNote(note)}
                    className='btn btn-outline-dark btn-sm'
                  >
                    Pin
                  </span>
                ) : (
                  <span className='pinned'>Pinned</span>
                )}
              </h2>
              <h5>{note.tagline}</h5>
              <p className='lead'>{note.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteBody;
