const express = require('express');
const { sendEmailToPerents } = require('../controllers/emailController');

const router = express.Router();


router.post('/send-parent-email',sendEmailToPerents);


module.exports = router;

