const mongoose = require('mongoose')

const bagSchema = new mongoose.Schema({
  hero: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hero',
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  itemAbility: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Bag', bagSchema)
