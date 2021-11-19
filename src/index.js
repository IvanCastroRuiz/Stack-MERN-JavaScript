// Para trabajar con las variables de entorno
require('dotenv').config(); // Para importar las variables de entorno
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4000;  // Objeto process 

// Operador ternario //
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';

// mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(URI, {useNewUrlParser: true})
        .then(()=> {
            console.log('La conexion a la base de datos se ha realizado bien !!!!!');

            // Crear el servisor y ponerme a escuchar peticiones HTTP

            app.listen(port, () => {
                console.log(`Servidor corriendo en http://localhost: ${port}`);
            });
        });