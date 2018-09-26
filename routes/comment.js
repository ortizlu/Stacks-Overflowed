const express = require('express')
const router = express.Router()
const commentController = require('../controller/comment')

router.post('/', commentController.create)
router.get('/edit', commentController.edit)
router.put('/', commentController.update)
router.delete('/', commentController.destroy)

module.exports = router
