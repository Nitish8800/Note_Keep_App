import axios from 'axios';

export async function getNotes() {
  const { data } = await axios.get('/notes');
  return data;
}

export async function getNote(id) {
  const { data } = await axios.get(`/notes/${id}`);
  return data;
}

export async function addNote(title, tagline, body) {
  const { data } = await axios.post('/notes', { title, tagline, body });
  return data;
}

export async function deleteNote(note) {
  await axios.delete(`/notes/${note._id}`);
}

export async function updateNote(id, title, tagline, body) {
  const { data } = await axios.put(`/notes/${id}`, {
    title,
    tagline,
    body,
  });
  return data;
}

export async function makePinnedNote(id) {
  const { data } = await axios.patch(`/notes/pinned/${id}`);
  return data;
}
