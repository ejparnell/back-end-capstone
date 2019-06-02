const mongoose = require('mongoose')

const monsterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hitDice: {
    type: Number,
    required: true
  },
  health: {
    type: Number,
    required: true
  },
  lore: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Monster', monsterSchema)
