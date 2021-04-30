const mongoose = require('mongoose');

const regBloggerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Please Enter first name'
    },
    lastName: String, 
    username: String,
    dob:String,
    gender: String,
  });
  module.exports = mongoose.model('RegBlogger', regBloggerSchema);