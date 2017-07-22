const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/', controller.read)

router.get('/detail/:id', controller.get)

router.get('/create', (req,res) => {
    res.render('item')
})

router.post('/create', controller.create)
router.get('/get/:id', controller.edit)
router.post('/update', controller.update)
router.get('/delete/:id', controller.delete)

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router
