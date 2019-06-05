const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  },
  age: {
    type: String,
    required: true
  },
  kin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kin',
    required: true
  }
})

module.exports = mongoose.model('Hero', heroSchema)
