const notesCtrl = {}

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();  // Metodo que consulta todos los datos que hay en una coleccion
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({ 
        title: title, 
        content: content, 
        date: date, 
        author: author
    });
    await newNote.save();  // Guarda la informacion en la BD
    res.json({message: 'Note Saved'})
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id); // Busqueda por ID
    res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { // Actualizar informacion en la BD
        title,
        author,
        content
    });
    // const note = await Note.findById(req.params.id); // Busqueda por ID
    res.json({message: 'Note updated'})
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id); // Elimina por ID
    res.json({message: 'Note deleted'})

};

module.exports = notesCtrl;