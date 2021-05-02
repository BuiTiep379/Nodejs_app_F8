const express = require('express')
const app = express()
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))
console.log(path.join(__dirname, 'views'))


app.use(morgan('combined'))
app.get('/', (req, res, next) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`App listening at: http://localhost:${port}`)
})