const express = require('express');
const router = express.Router();
const { Note, validateNote } = require('../models/Note');

router.get('/', async (req, res) => {
  let notes = await Note.find();
  res.status(200).send(notes);
});

router.get('/:id', async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(400).send('Something went wrong');
  }
  res.status(200).send(note);
});

router.post('/', async (req, res) => {
  const { title, tagline, body } = req.body;

  const { error } = validateNote(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let note = new Note({
    title,
    tagline,
    body,
  });
  note = await note.save();
  res.status(201).send(note);
});

router.put('/:id', async (req, res) => {
  const { title, tagline, body } = req.body;

  const { error } = validateNote(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let note = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: { title, tagline, body } },
    { new: true }
  );
  res.status(200).send(note);
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndRemove(req.params.id);
  res.send(true);
});

router.patch('/pinned/:id', async (req, res) => {
  let note = await Note.findByIdAndUpdate(
    req.params.id,
    {
      $set: { pinned: true },
    },
    { new: true }
  );
  res.send(note);
});

module.exports = router;
