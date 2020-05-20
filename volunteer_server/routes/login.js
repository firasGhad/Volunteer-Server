var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login')



router.post('/', async function (req, res, next) {
  try {
    const logedin = await loginController.customersLogin(req.body)
    if (typeof (logedin) === 'string') res.status(200).json(logedin)
    res.cookie('volunteer', JSON.stringify(logedin), { maxAge: 1000 * 60 * 60 * 24 * 7 });
    res.status(200).json({firstname: logedin.first_name, lastname: logedin.last_name });
  } catch (err) {
    res.status(500).json(err.message)
  }
});



module.exports = router;
