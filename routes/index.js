const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login')
})

router.get('/signup', function (req, res, next) {
  res.render('signup')
})

router.get('/books', function (req, res, next) {
  res.render('elements')
})

module.exports = router
