const express = require("express");
const {
  handlePayment,
  verfiyPayment,
} = require("../controllers/paymentsController");
const route = express.Router();

route.post("/student", handlePayment);
route.post("/verify", verfiyPayment);



module.exports = route;
