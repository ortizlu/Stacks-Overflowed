const express = require('express')
const router = express.Router()
const questionController = require('../controller/question')


router.get('/new', questionController.new)
router.post('/', questionController.create)
router.get('/:id', questionController.show)
router.get('/:id/edit', questionController.edit)
router.put('/:id', questionController.update)
router.delete('/:id', questionController.destroy)

module.exports = router