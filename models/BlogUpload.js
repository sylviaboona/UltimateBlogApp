const mongoose = require('mongoose');
const bloguploadSchema = new mongoose.Schema({

    title: String,
    content: String,
  });

  module.exports = mongoose.model('BlogUpload', bloguploadSchema);