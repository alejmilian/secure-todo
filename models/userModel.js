const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  name: {
    typeo: String,
    required: 'Enter name'
  },
  email: {
    typeo: String,
    required: 'Enter a email'
  },
  hashPassword: {
    typeo: String,
    required: 'Enter a password'
  },
  create_at: {
    type: Date,
    default: Date.now()
  },
  statics: {
    comparePasswords (password, hashPassword) {
      return bcrypt.compareSync(password, hashPassword)
    }
  }
})

module.exports = UserSchema
