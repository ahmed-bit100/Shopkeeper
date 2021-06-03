const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  password: String,
});

module.exports = User = mongoose.model('User', userSchema);
