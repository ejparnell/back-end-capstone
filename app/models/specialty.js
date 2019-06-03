const mongoose = require('mongoose')

const specialtySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  health: {
    type: Number,
    required: true
  },
  hitDice: {
    type: Number,
    required: true
  },
  weapon: {
    type: String,
    required: true
  },
  armor: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Specialty', specialtySchema)
