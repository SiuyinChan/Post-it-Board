const express = require('express');

const router = express.Router();

const NoteController = require('../controllers/note');

router.post('/', NoteController.createNote);

router.get('/', NoteController.getAllNotes);

router.get('/:id', NoteController.getOneNote);

router.put('/:id', NoteController.updateNote);

router.delete('/:id', NoteController.deleteNote);

module.exports = router;
