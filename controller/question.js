const mongoose = require('../db/connection')
const Question = require('../models/question')
const commentSchema = require('../models/comment')
const User = require('../models/user')
const Comment = mongoose.model('Comment', commentSchema)



module.exports = {
  new: (req, res) => {
    User.find({}).then(users => {
      res.render('question/new', { users })
    })
  },
  show: (req, res) => {
    Question.findOne({ _id: req.params.id })
    .populate("author")
    .exec(function(err, question) {
      Comment.populate(question.comments, { path: "author" }, function(
        err,
        comments
      ) {
        question.comments = comments;
        console.log(question);
        res.render("question/show", question);
      });
    });
  },
  create: (req, res) => {
    Question.create({
      title: req.body.question.title,
      content: req.body.question.content,
      author: req.user._id
    }).then(question => {
      req.user.questions.push(question);
      req.user.save(err => {
        res.redirect(`/question/${question._id}`);
      });
    });
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
