const express = require('express');

const routes = require('./routes');

const PORT = 5000;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);


app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));