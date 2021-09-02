const mongoose = require ('mongoose');
const {config} = require('dotenv');
config();
const URI = process.env.MONGODB_URI || DB;

mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});