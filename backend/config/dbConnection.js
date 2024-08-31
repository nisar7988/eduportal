const mysql = require("mysql2");


const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'eduportal'
})

connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  

  console.log("succcessfully connected");
})

module.exports = connection;