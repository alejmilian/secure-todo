const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema({
  name: {
    typeo: String,
    required: 'Enter name'
  },
  email: {
    typeo: String,
    required: 'Enter a email'
  },
  password: {
    typeo: String,
    required: 'Enter a password'
  },
  create_at: {
    type: Date,
    default: Date.now()
  }
})
