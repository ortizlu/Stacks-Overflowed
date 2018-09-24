const Question = require('../models/question')

module.exports = {
  index: (req, res) => {
    Question.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('author')
      .then(questions => {
        res.render('app/index', { questions })
      })
  }
}
