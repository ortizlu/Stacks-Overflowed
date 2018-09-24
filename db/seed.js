const User = require('../models/User')
const { Question } = require('../models/question')
// const bcrypt = require('bcrypt-nodejs')

// const createPassword = password =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Question.find({}).remove(() => {
    let pancakeMan = User.create({
      email: 'pancake@gmail.com',
      password: createPassword('password')
    }).then(user => {
      Promise.all([
        Question.create({
          title: 'Waffles anyone?',
          content:
            'Hello all, my question is, have you guys tried waffles yet?',
          author: user._id
        }).then(question => {
          user.questions.push(question)
        }),
        Question.create({
          title: 'Honey on Pancakes?',
          content: 'Has anyone tried honey on their pancakes?',
          author: user._id
        }).then(question => {
          user.questions.push(question)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })

    let pancakeLover = User.create({
      email: 'pancakeLover@gmail.com',
      password: createPassword('password')
    }).then(user => {
      Promise.all([
        Question.create({
          title: 'Bluerry Pancakes, Maple Syrup?',
          content: "What's the best maple syrup for blueberry pancakes?",
          author: user._id
        }).then(question => {
          user.questions.push(question)
        }),
        Question.create({
          title: 'Spoon, Fork.. or?',
          content: 'Should I use a spoon or a fork to eat pancakes?',
          author: user._id
        }).then(question => {
          user.questions.push(question)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })

    let pancakeQueen = User.create({
      email: 'pancakequeen@gmail.com',
      password: createPassword('password')
    }).then(user => {
      Promise.all([
        Question.create({
          title: 'Eggs in pancakes?',
          content: 'Do pancakes contain eggs?',
          author: user._id
        }).then(question => {
          user.questions.push(question)
        }),

        Question.create({
          title: 'Best Breakfast Delicacy?',
          content:
            'Donuts, Pancakes, or Biscuits? What do you guys think is the best breakfast choice?',
          author: user._id
        }).then(question => {
          user.questions.push(question)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })
  })
})
