const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('secret');

exports.Register = async (req, res) => {
  const {name, email, phone, address, password} = req.body;
  try {
  } catch (error) {}
};
