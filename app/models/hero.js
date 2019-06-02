const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bag',
    required: true
  },
  specialty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Specialty',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  alignment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Hero', heroSchema)
