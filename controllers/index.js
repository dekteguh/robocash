const Item = require('../models').Item

const create = (req,res) => {

  Item.create(req.body).then(() => {
    console.log('Success create!')
    res.redirect('/')
  }).catch(err => {
    console.log(err.message)
  })
}

const read = (req,res) => {
  Item.findAll().then(items => {
    res.render('index',{
      statusCode: 200,
      items: items
    })
  }).catch(err => {
    console.log(err.message)
    res.render('index',{
      statusCode: 500,
      items: null
    })
  })
}

const get = (req,res) => {
  Item.findOne({where: {id: parseInt(req.params.id)}}).then(item => {
    let type = true

    /*
    if(Array.isArray(JSON.parse(item.description))){
      item.description = JSON.parse(item.description)
      type = true
    }
    */

    let desc = []
    item.description.split('\r\n').map(line => {
      desc.push(line)
    })

    item.description = desc

    res.render('detail',{
      statusCode: 200,
      item: item,
      type: type
    })
  }).catch(err => {
    console.log(err.message)
    res.render('detail',{
      statusCode: 500,
      item: null
    })
  })
}

const update = (req,res) => {
  Item.update({
    title: req.body.title,
    image: req.body.image,
    price: parseDouble(req.body.price),
    description: req.body.description,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where: {
      id: req.params.id
    }
  }).then(() => {
    console.log('Success update!')
    res.redirect('/')
  }).catch(err => console.log(err.message))
}

const remove = (req,res) => {
  Item.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    console.log('Success delete!')
    res.redirect('/')
  }).catch(err => console.log(err.message))
}

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: remove,
  get: get
}
