const mongoose = require('mongoose');

const pigeonSchema = new mongoose.Schema({
  loftName: {
    type: String,
    required: true,
    default: 'N/A',
  },
  fancier: {
    type: String,
    required: true,
    default: 'N/A',
  },
  letters: {
    type: String,
    required: true,
    default: 'N/A',
  },
  ringNo: {
    type: String,
    required: true,
    default: 'N/A',
  },
  sex: {
    type: String,
    required: true,
    default: 'H',
  },
  year: {
    type: String,
    required: true,
    default: '2022',
  },
  colour: {
    type: String,
    required: true,
    default: 'BB',
  },
  sire: {
    type: Object,
    required: true,
    default: {},
  },
  dam: {
    type: Object,
    required: true,
    default: {},
  },
  name: {
    type: String,
    required: true,
    default: 'N/A',
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
    default: 'N/A',
  },
  strain: {
    type: String,
    required: true,
    default: 'N/A',
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
