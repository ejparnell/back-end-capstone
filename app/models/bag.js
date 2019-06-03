const mongoose = require('mongoose')

const bagSchema = new mongoose.Schema({
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
