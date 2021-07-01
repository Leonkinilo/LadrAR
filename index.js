//Juan
const express = require('express');
const cors = require('cors');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());

// global variables

// routes
app.use('/perros', require ('./routes/perros.rutas'));

// static files

// server is listening
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});