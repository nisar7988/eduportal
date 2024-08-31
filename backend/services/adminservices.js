const connection = require("../config/dbConnection");

function getAdmininfo(name,password){
  return new Promise((resolve, reject)=>{
    const sql =
      "SELECT * FROM `admin` WHERE username = ? AND password= ?";
      connection.query(sql,[name, password],(error,result)=>{
        if (error) {
          console.log("error occure in admindata file", error);
          reject(error);
        } else {
          resolve(result);
        }
      })
  })


}



module.exports = {getAdmininfo}