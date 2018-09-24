const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stacks-overflowed')
mongoose.Promise = Promise
module.exports = mongoose
