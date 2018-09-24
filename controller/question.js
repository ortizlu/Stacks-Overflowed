const Question = require('../models/question')
const Comment = require('../models/comment')
const User = require('../models/user')

module.exports = {
  new: (req, res) => {
    res.send('this is our question/new using get request')
  },
  show: (req, res) => {
    res.send('this is our question/show using get request')
  },
  create: (req, res) => {
    res.send('this is our question using post request')
  },
  edit: (req, res) => {
    res.send('this is our question using get request')
  },
  update: (req, res) => {
    res.send('this is our question using put request')
  },
  destroy: (req, res) => {
    res.send('this is our question using delete request')
  }
}
