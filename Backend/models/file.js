const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  repoName: { type: String, required: true }, 
  fileType: { type: String, required: true },
  content: { type: String},
});

module.exports = mongoose.model('File', fileSchema);
