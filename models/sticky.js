var mongoose = require('mongoose');

var stickySchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  }
});

var Sticky = mongoose.model('Sticky', userSchema);

module.exports = Sticky;
