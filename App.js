const express = require('express')
const app = express()

const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')

const path = require('path')


const handle = handlebars.create({
    defaultLayout: 'main'
})

app.engine('handlebars', handle.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home.handlebars')
})

app.listen(8081, () => {
    console.log('Logado na porta: 8081')
})