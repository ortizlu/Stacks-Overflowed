const express = require('express')
const hbs = require("hbs");
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

app.use(require('./routes/index.js'))

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
hbs.registerPartials(__dirname + "/views/partials");

app.listen(4000, () => console.log('server is running'))
