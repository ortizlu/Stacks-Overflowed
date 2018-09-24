const express = require('express')
const router = express.Router()
const commentController = require('../controller/comment')


router.get('/new', commentController.new)
router.post('/', commentController.create)
router.get('/:id', commentController.show)
router.get('/:id/edit', commentController.edit)
router.put('/:id', commentController.update)
router.delete('/:id', commentController.destroy)

module.exports = router