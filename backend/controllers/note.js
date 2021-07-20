const Note = require("../models/note");

exports.createNote = (req, res, next) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content,
    });
    note.save().then(
        () => {
            res.status(201).json({
                message: 'Card saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getAllNotes = (req, res, next) => {
    Note.find().then(
        (notes) => {
            res.status(200).json(notes);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getOneNote = (req, res, next) => {
    Note.findOne({
        _id: req.params.id
    }).then(
        (note) => {
            res.status(200).json(note);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.updateNote = (req, res, next) => {
    const note = new Note({
        _id: req.params.id,
        title: req.body.title,
        content: req.body.content,
    });
    Note.updateOne({_id: req.params.id}, note).then(
        () => {
            res.status(201).json({
                message: 'Card updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteNote = (req, res, next) => {
    Note.deleteOne({_id: req.params.id}).then(
        (note) => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
