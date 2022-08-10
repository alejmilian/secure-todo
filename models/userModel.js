const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: 'Enter name'
    },
    email: {
      type: String,
      unique: 'Must be unique email per user',
      required: 'Enter a email'
    },
    hashPassword: {
      type: String,
      required: 'Enter a password'
    },
    create_at: {
      type: Date,
      default: Date.now()
    }
  },
  {
    statics: {
      comparePasswords (password, hashPassword) {
        return bcrypt.compareSync(password, hashPassword)
      }
    }
  })

module.exports = UserSchema
