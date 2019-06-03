const express = require('express')
const passport = require('passport')
const Bag = require('../models/bag')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
router.get('/bags', (req, res, next) => {
  Bag.find()
    .then(bags => {
      return bags.map(bag => bag.toObject())
    })
    .then(bags => res.status(200).json({ bags: bags }))
    .catch(next)
})

// SHOW
router.get('/bags/:id', (req, res, next) => {
  Bag.findById(req.params.id)
    .then(handle404)
    .then(bag => res.status(200).json({ bag: bag.toObject() }))
    .catch(next)
})

// CREATE
router.post('/bags', requireToken, (req, res, next) => {
  req.body.bag.owner = req.user.id
  Bag.create(req.body.bag)
    .then(bag => {
      res.status(201).json({ bag: bag.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/bags/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.bag.owner

  Bag.findById(req.params.id)
    .then(handle404)
    .then(bag => {
      requireOwnership(req, bag)
      return bag.update(req.body.bag)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/bags/:id', requireToken, (req, res, next) => {
  Bag.findById(req.params.id)
    .then(handle404)
    .then(bag => {
      requireOwnership(req, bag)
      bag.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
