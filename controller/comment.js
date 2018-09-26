const mongoose = require('../db/connection')
const Question = require('../models/question')
const commentSchema = require('../models/comment')
const User = require('../models/user')
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  create: (req, res) => {
    console.log(req.params.id)
  },
  edit: (req, res) => {
    res.send('this is our comment using get request')
  },
  update: (req, res) => {
    res.send('this is our comment using put request')
  },
  destroy: (req, res) => {
    res.send('this is our comment using delete request')
  }
}
