const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = require('../models/userModel')

const User = mongoose.model('User', userSchema)

//TODO:
function loginRequired(req, res) {
}
