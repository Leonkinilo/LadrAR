const express = require ('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));



app.all('/user', (req, res, next) =>{
    console.log('abcd');
    next();
});


app.get('/user/:id',(req, res) => {
    res.send(req.params);
} );

app.post('/user/:id',(req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('funciono ');

} );

app.put('/contact',(req, res) => {
    res.send('alcky gocor');
} );

app.delete('/test',(req, res) => {
    res.send('puto el que lee');
} );

app.get('/agga',(req, res) =>{
    res.send('lucas es alto gei');
});
app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log('server en el puerto 3000');
});