const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, // randomly generate a password upon creation and send emial to employee
  locations: [String],
  standardRate: Number, // cents
  business: {
    // type: mongoose.Schema.Types.ObjectId, // Commented out for early testing
    // ref: 'Business'
    type: String // Remove this, uncomment next 2 lines
  }
})

employeeSchema.methods.generateAuthToken = function () {
  // The first argument is the PUBLIC payload, the second argument is the private key. The private key should be stored in an environment variable, not hard-coded like below.
  const token = jwt.sign({ _id: this._id }, 'Private Key')
  return token
}

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = {
  Employee
}
