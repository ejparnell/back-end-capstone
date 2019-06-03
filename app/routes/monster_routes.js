const express = require('express')
const passport = require('passport')
const Monster = require('../models/monster')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
router.get('/monsters', (req, res, next) => {
  Monster.find()
    .then(monsters => {
      return monsters.map(monster => monster.toObject())
    })
    .then(monsters => res.status(200).json({ monsters: monsters }))
    .catch(next)
})

// SHOW
router.get('/monsters/:id', (req, res, next) => {
  Monster.findById(req.params.id)
    .then(handle404)
    .then(monster => res.status(200).json({ monster: monster.toObject() }))
    .catch(next)
})

// CREATE
router.post('/monsters', requireToken, (req, res, next) => {
  req.body.monster.owner = req.user.id
  Monster.create(req.body.monster)
    .then(monster => {
      res.status(201).json({ monster: monster.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/monsters/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.monster.owner

  Monster.findById(req.params.id)
    .then(handle404)
    .then(monster => {
      requireOwnership(req, monster)
      return monster.update(req.body.monster)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/monsters/:id', requireToken, (req, res, next) => {
  Monster.findById(req.params.id)
    .then(handle404)
    .then(monster => {
      requireOwnership(req, monster)
      monster.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
