//Juan
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require ('./database');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json());

// global variables

// routes
app.use('/home', require ('./routes/perros.rutas'));
app.use('/usuarios', require('./routes/usuarios.rutas'))
app.get('/', (req, res) =>{
    res.redirect('/home');
});
//app.use('/', require ('./routes/perros.rutas'));

// static files

// server is listening
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});
