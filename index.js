const express = require('express');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares

// global variables

// routes

// static files

// server is listening
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});