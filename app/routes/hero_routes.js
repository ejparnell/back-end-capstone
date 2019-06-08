const express = require('express')
const passport = require('passport')
const Hero = require('../models/hero')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
// const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
router.get('/heros', (req, res, next) => {
  Hero.find()
    .populate('specialty')
    .populate('kin')
    .then(heros => {
      return heros.map(hero => hero.toObject())
    })
    .then(heros => res.status(200).json({ heros: heros }))
    .catch(next)
})

// SHOW
router.get('/heros/:id', (req, res, next) => {
  Hero.findById(req.params.id)
    .populate('specialty')
    .populate('kin')
    .then(handle404)
    .then(hero => res.status(200).json({ hero: hero.toObject() }))
    .catch(next)
})

// CREATE
router.post('/heros', requireToken, (req, res, next) => {
  req.body.hero.owner = req.user.id
  Hero.create(req.body.hero)
    .then(hero => {
      res.status(201).json({ hero: hero.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/heros/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.hero.owner

  Hero.findById(req.params.id)
    .then(handle404)
    .then(hero => {
      // requireOwnership(req, hero)
      return hero.update(req.body.hero)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/heros/:id', requireToken, (req, res, next) => {
  Hero.findById(req.params.id)
    .then(handle404)
    .then(hero => {
      // requireOwnership(req, hero)
      hero.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
