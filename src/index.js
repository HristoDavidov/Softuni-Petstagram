const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./routes');


const PORT = 5000;

const app = express();

// TODO: change db name (/petatagram)
mongoose.connect(`mongodb://127.0.0.1:27017/petstagram`)
    .then(() => console.log('DB Connected successfully'))
    .catch(err => console.log('DB Error,' , err.message));

// config handlebars and extension
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(routes);


app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));