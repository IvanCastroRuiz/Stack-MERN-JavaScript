const express = require('express');
const cors = require('cors');
const app = express();


// Configurar el servidor

// middlewares
// Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded());

// routes

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


module.exports = app;

