const express = require('express')
const passport = require('passport')
const Kin = require('../models/kin')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
router.get('/kins', (req, res, next) => {
  Kin.find()
    .then(kins => {
      return kins.map(kin => kin.toObject())
    })
    .then(kins => res.status(200).json({ kins: kins }))
    .catch(next)
})

// SHOW
router.get('/kins/:id', (req, res, next) => {
  Kin.findById(req.params.id)
    .then(handle404)
    .then(kin => res.status(200).json({ kin: kin.toObject() }))
    .catch(next)
})

// CREATE
router.post('/kins', (req, res, next) => {
  // req.body.kin.owner = req.user.id
  Kin.create(req.body.kin)
    .then(kin => {
      res.status(201).json({ kin: kin.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/kins/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.kin.owner

  Kin.findById(req.params.id)
    .then(handle404)
    .then(kin => {
      requireOwnership(req, kin)
      return kin.update(req.body.kin)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/kins/:id', requireToken, (req, res, next) => {
  Kin.findById(req.params.id)
    .then(handle404)
    .then(kin => {
      requireOwnership(req, kin)
      kin.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
