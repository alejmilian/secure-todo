if (require.main === module) throw new Error('Run using app.js www')

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const handlerbars = require('express-handlebars').create({
  defaultLayout: 'main',
  extname: '.hbs'
})
const config = require('./config/configuration.json')

// routes
const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')

const app = express()

// logging setup
require('./lib/logger')(app)

//  view engine setup
app.engine('hbs', handlerbars.engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

//  parsers setup
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//  serve static files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/bulma',
  express.static(path.join(__dirname, '/node_modules/bulma/css/')))

app.use(require('express-session')(
  {
    secret: config.COOKIE_SECURE_SIGN,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

//  routes setup
app.use('/', indexRouter)
app.use('/admin', adminRouter)

//  catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, 'Resource Not Found'))
})

//  error handler
app.use(function (err, req, res, next) {
  const errorCode = err.status || 500
  res.status(errorCode)
  res.render('error', {
    layout: undefined,
    message: err.message,
    status: errorCode,
    // expose error information only on development enviorment
    error: req.app.get('env') === 'development'
      ? {
          message: err.message,
          headers: err.headers,
          stack: err.stack
        }
      : {},
    url: '/'
  })
})

module.exports = app
