const mongoose = require('mongoose');

// Crea la BD en mongoose
const URI = 'mongodb://localhost/mernstack';

mongoose.connect(URI, {
    useNewUrl: true,  // Se configuran estas opciones   
    useCreateIndex: true // para que mogoose se pueda conectar
});

// ahora escuchamos la cadena de conexion

const connection =  mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});


module.exports = connection;