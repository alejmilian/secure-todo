const logger = require('morgan')

//  logger setup
module.exports = function (app) {
  return app.use(logger('dev'))
}
