const express = require('express')
const router = express.Router()

router.use('/', require('./application'))
router.use('/user', require('./user'))
router.use('/question/:id/comment', require('./comment'))
router.use('/question', require('./question'))

module.exports = router
