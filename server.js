const express = require('express')
const path = require('path')
const port = 3000

const items = require('./models/items')

const app = express()

// setting views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// setting static file
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("index", { items: items });
})

app.get('/detail/:id', (req, res) => {
    const item = items.find(data => {
        return data.id == req.params.id
    })
    
    res.render('detail', {
        item: item
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(port, () => {
    console.log(`Server listen to http://127.0.0.1:${port}/`)
})
