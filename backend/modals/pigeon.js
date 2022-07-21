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
    default: 'H',
  },
  year: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
    default: 'BB',
  },
  sire: {
    type: Object,
    required: true,
    default: null,
  },
  dam: {
    type: Object,
    required: true,
    default: null,
  },
  name: {
    type: String,
    required: true,
    default: null,
  },
  img: {
    type: String,
    required: true,
    default:
      'http://kippenjungle.nl/layeredimage.php?ext=GIF&flip=Y&pic=pigeon/blackbar-blue.GIF',
  },
  desc: {
    type: String,
    required: true,
    default: null,
  },
  strain: {
    type: String,
    required: true,
    default: null,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pigeon', pigeonSchema);
