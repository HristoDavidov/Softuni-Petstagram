const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const routes = require('./routes');

const PORT = 5000;

const app = express();

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