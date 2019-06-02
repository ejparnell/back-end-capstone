const express = require('express')
const passport = require('passport')
const Specialty = require('../models/specialty')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
router.get('/specialtys', requireToken, (req, res, next) => {
  Specialty.find()
    .then(specialtys => {
      return specialtys.map(specialty => specialty.toObject())
    })
    .then(specialtys => res.status(200).json({ specialtys: specialtys }))
    .catch(next)
})

// SHOW
router.get('/specialtys/:id', requireToken, (req, res, next) => {
  Specialty.findById(req.params.id)
    .then(handle404)
    .then(specialty => res.status(200).json({ specialty: specialty.toObject() }))
    .catch(next)
})

// CREATE
router.post('/specialtys', requireToken, (req, res, next) => {
  req.body.specialty.owner = req.user.id
  Specialty.create(req.body.specialty)
    .then(specialty => {
      res.status(201).json({ specialty: specialty.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/specialtys/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.specialty.owner

  Specialty.findById(req.params.id)
    .then(handle404)
    .then(specialty => {
      requireOwnership(req, specialty)
      return specialty.update(req.body.specialty)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/specialtys/:id', requireToken, (req, res, next) => {
  Specialty.findById(req.params.id)
    .then(handle404)
    .then(specialty => {
      requireOwnership(req, specialty)
      specialty.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
