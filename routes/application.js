const express = require('express')
const router = express.Router()
const applicationController = require('../controller/application')


router.get('/', applicationController.index) 

module.exports = router 