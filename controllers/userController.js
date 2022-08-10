const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const userSchema = require('../models/userModel')

const User = mongoose.model('User', userSchema)

module.exports = {

  addNewUser (req, res) {
    const { userName, email, password: hashPassword } = req.body
    const newUser = new User({ userName, email, hashPassword })
    console.log(newUser)
    newUser.save((err, user) => {
      if (err) res.send(err)
      res.json(user)
    })
  },

  getAllUsers (req, res) {
    User.find({}, (err, users) => {
      if (err) res.send(err)
      res.json(users)
    })
  },

  getUserByEmail (req, res) {
    User.findById(req.body.email, (err, user) => {
      if (err) res.send(err)
      res.json(user)
    })
  },

  updateUser (req, res) {
    User.findOneAndUpdate(
      { email: req.body.email },
      req.body,
      { new: true },
      (err, user) => {
        if (err) res.send(err)
        res.json(user)
      })
  },

  deleteUser (req, res) {
    User.findOneAndDelete(
      { email: req.body.email },
      (err, user) => {
        if (err) res.send(err)
        res.json({ message: 'Successfully user delete' })
      })
  }

}
