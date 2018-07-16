const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

const managerSchema = new Schema({
  email: String,
  password: String,
  business: {
    // type: mongoose.Schema.Types.ObjectId, // Commented out for testing
    // ref: 'Business'
    type: String
  }
})

managerSchema.methods.generateAuthToken = function () {
  // The first argument is the PUBLIC payload, the second argument is the private key. The private key should be stored in an environment variable, not hard-coded like below.
  const token = jwt.sign({ _id: this._id }, 'Private Key') // TODO: Change the private key
  return token
}

const Manager = mongoose.model('Manager', managerSchema)

module.exports = {
  Manager
}
