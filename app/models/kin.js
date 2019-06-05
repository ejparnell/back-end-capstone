const mongoose = require('mongoose')

const kinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  ability: {
    type: String,
    required: true
  },
  speed: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Kin', kinSchema)
