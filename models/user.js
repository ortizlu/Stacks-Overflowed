const mongoose = require('../db/connection')
const Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

const User = new Schema({
  local: {
    email: String,
    password: String
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Question'
    }
  ]
})

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('User', User)
