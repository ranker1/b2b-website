const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Business', BusinessSchema);
