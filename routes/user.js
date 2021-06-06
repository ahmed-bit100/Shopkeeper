const express = require('express');
const {Register, Login} = require('../controllers/user.controller');
const {
  registerRules,
  validator,
  loginRules,
} = require('../middleware/validator');
const router = express.Router();

router.post('/register', registerRules(), validator, Register);
router.post('/login', loginRules(), Login);

module.exports = router;
