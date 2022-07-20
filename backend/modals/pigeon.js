const mongoose = require('mongoose');

const pigeonSchema = new mongoose.Schema({
  loftName: {
    type: String,
    required: true,
  },
  letters: {
    type: String,
    required: true,
  },
  ringNo: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pigeon', pigeonSchema);
