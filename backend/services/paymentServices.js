const connection = require('../config/dbConnection')



const AddingFee = (data)=>{
   console.log(data)
   const { userId, name, amountPaid } = data;
   const sql =`UPDATE students SET fee = fee + ? WHERE user_name = ?`
   connection.query(sql, [amountPaid, userId], (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log("done : ",result);
   })
}

module.exports = {AddingFee}