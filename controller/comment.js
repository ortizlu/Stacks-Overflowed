const mongoose = require('../db/connection')
const Question = require('../models/question')
const commentSchema = require('../models/comment')
const User = require('../models/user')
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  create: (req, res) => {
    console.log(req.body)
    Question.findById(req.body.id).then(question => {
      Comment.create({
        content: req.body.content
      }).then(comment => {
        question.comments.push(comment)
        question.save(err => {
          res.redirect(`/question/${req.body.id}`)
        })
      })
    })
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
