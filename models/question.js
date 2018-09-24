const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const commentModel = require('./comment')

const Question = new Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [commentModel]
})

module.exports = mongoose.model('Question', Question)
