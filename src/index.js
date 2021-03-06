const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const route = require('./routers');
const db = require('./config/db/index');
db.connect();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.set('css', path.join(__dirname, '/public/css'));
app.set('js', path.join(__dirname, '/public/js'));
app.set('images', path.join(__dirname, '/public/images'));
app.set('vendors', path.join(__dirname, '/public/vendors'));
console.log(path.join(__dirname, 'views'));

app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`App listening at: http://localhost:${port}`);
});
