const {Schema, model }  = require('mongoose');

const userSchema = new Schema({
    username: { 
        type: String,
        required: true, // valor obligatorio en la BD
        trim: true, // elimina los espacios en blanco
        unique: true // valor unico
    }
}, {
    timestamp: true
});

// Creamos una coleccion llamada User
module.exports = model('User', userSchema);