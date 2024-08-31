const express = require('express')
const router = express.Router()
const {HandleLogin} = require('../controllers/authcontroller')
  

router.post('/login',HandleLogin)


module.exports = router