var express = require('express');
var router = express.Router();
const signUpController = require('../controllers/signUp')


router.post('/', async function (req, res, next) {
  try {
    signUp = await signUpController.organizationSignUp(req.body)
    res.status(200).json(signUp);
  } catch (err) {
    res.status(500).json(err.message)
  }
});


module.exports = router;
