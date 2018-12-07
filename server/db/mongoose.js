var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// doc https://mongoosejs.com/docs/validation.html
// https://mongoosejs.com/docs/guide.html

module.exports = {mongoose};