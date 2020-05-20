var express = require('express');
var router = express.Router();
const signUpController = require('../controllers/signUp')


router.post('/', async function (req, res, next) {
  try {
    signUp = await signUpController.signUp(req.body, req.userId)
    res.status(200).json(signUp);
  } catch (err) {
    res.status(500).json(err.message)
  }
});


module.exports = router;
