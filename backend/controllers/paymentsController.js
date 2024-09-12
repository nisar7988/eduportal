const { Cashfree } = require("cashfree-pg");
const crypto = require("crypto");
const { AddingFee } = require("../services/paymentServices");
Cashfree.XClientId = "TEST10301392d7e471c3f5af0b3f132429310301";
Cashfree.XClientSecret =
  "cfsk_ma_test_5e5d471b9b4fbe727ad894d4d9efc84e_52c8c6e2";
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

function generateOrderId() {
  const uniqueId = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHash("sha256");
  hash.update(uniqueId);
  const orderId = hash.digest("hex");
  return orderId.substr(0, 12);
}

const handlePayment = async (req, res) => {
  console.log(req.body);
  const { userId, name, email, phoneNumber, amountPaid } = req.body;
  console.log(email);
  try {
    const orderId = generateOrderId();
    var request = {
      order_amount: amountPaid,
      order_currency: "INR",
      order_id: orderId,
      customer_details: {
        customer_id: userId,
        customer_name: name,
        customer_email: email,
        customer_phone: phoneNumber,
      },
      order_meta: {
        return_url:
          // "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}",
          "https://localhost:3000/student",
      },
    };

    const response = Cashfree.PGCreateOrder("2023-08-01", request)
      .then((response) => {
        console.log("Order created successfully:", response.data);
         

         
         
         
         
         
        res.send(response.data);
        AddingFee(req.body,res)
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
      });
      console.log("nih hua")
     
  } catch (err) {
    console.error(err);
    if (err.response && err.response.data) {
      res.status(500).json({ error: err.response.data.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

};





const verfiyPayment = (req,res)=>{

try{
  console.log("chlgya bhai")
  let {orderId}= req.body
  console.log(orderId);
  Cashfree.PGOrderFetchPayments("2023-08-01",orderId).then((response)=>{
    res.json(response.data);
  }).catch((error)=>{
    console.error(error.response.data.message);
  })
}catch(err){


  console.log(err);
}



}




module.exports = { handlePayment, verfiyPayment };
