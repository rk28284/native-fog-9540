const mongoose = require('mongoose');

const repoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
});

module.exports = mongoose.model('Repo', repoSchema);
