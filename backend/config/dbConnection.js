const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: `gateway01.ap-southeast-1.prod.aws.tidbcloud.com`,
  port: "4000", // Constructed host
  user: "2nk1Gg5ssyNRz36.root", // Public key from environment variable
  password: "Kwun6QWArjEPdesS", // Private key from environment variable
  database: "eduportal", // Your database name
  ssl: {
    rejectUnauthorized: false, // Enable this if SSL is required
  },
})

connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  

  console.log("succcessfully connected");
})

module.exports = connection;
