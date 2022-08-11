const mongoose = require('mongoose');
const Joi = require('joi');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  pinned: {
    type: Boolean,
    default: false,
  },
});

const Note = mongoose.model('Note', noteSchema);

function validateNote(note) {
  const schema = Joi.object({
    title: Joi.string().required().label('Title'),
    tagline: Joi.string().required().label('Tagline'),
    body: Joi.string().required().label('Body'),
  });

  return schema.validate(note);
}

module.exports = { Note, validateNote };
