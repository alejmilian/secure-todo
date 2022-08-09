const express = require('express')
const router = express.Router()

const {
  getAllUsers,
  addNewUser,
  getUserByEmail,
  updateUser,
  deleteUser
} = require('../controllers/userController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login')
})

/* Signup page. */
router.route('/signup')
  .get(function (req, res, next) {
    res.render('signup')
  })
  .post(addNewUser)

/* User collection */
router.route('/users')
  .get(getAllUsers)

/* User document */
router.route('/users/user')
  .get(getUserByEmail)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router
