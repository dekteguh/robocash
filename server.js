const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000

// const items = require('./models/Items.json') // not using again
const sequelize = require('./models').sequelize // goto index.js in models folder

const app = express()

const index = require('./routes/index')

// setting views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// setting static file
app.use(express.static(path.join(__dirname, 'public')))

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', index)

// sync with Promise then() if success and catch if error
sequelize.sync()
    .then(() => {
         app.listen(port, () => {
            console.log(`Server listen to http://127.0.0.1:${port}/`)
         })
    })
    .catch(err => {
        console.log("Something went wrong with sync. Error: " + err.message)
    })
