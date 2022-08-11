import { Routes, Route } from 'react-router-dom';
import AddNote from './components/addNote';
import Notes from './components/notes';
import UpdateNote from './components/updateNote';
import NotFound from './components/notFound';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container my-5'>
      <ToastContainer />
      <Routes>
        <Route path='/update/:id' element={<UpdateNote />} />
        <Route path='/add' element={<AddNote />} />
        <Route path='/' element={<Notes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
