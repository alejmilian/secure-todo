const mongoose = require('mongoose')
const mongodbUrl = process.env.MONGODB_URL

async function connectToMongodb () {
  return mongoose.connect(mongodbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
}

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})

module.exports = connectToMongodb()
