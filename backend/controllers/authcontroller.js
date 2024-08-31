
const express = require('express');
const connection = require('../config/dbConnection')
const {getTeacherInfo, getStudentInfo} = require('../services/teacherServices');
const { getAdmininfo } = require('../services/adminservices');

const HandleLogin = (req,res)=> {
   const data = req.body;
   let flag = 0;
   const sql = "SELECT * FROM login";
   connection.query(sql,(err,result)=>{
      if(err){
         console.log("error occur");
      }
      else{
     let flag = 0;
        result.forEach(e=>{
         if(data.name===e.username&&data.password === e.password&&data.role === e.role){
            console.log("true match!");
            flag++;
            if(e.role==='teacher'){
               console.log("yeah....you have authority to add or remove students");
               const teacherinfo = getTeacherInfo(data.name, data.password);
               teacherinfo.then((result)=>{
                  console.log(result);
                   return res.status(200).json({ page: data.role , info : result});
               })
               
            }
            else if(e.role==='admin'){
               console.log('yeah you are principle , good evening sir');
               console.log(data.name,data.password)
               const admininfo = getAdmininfo(data.name, data.password);
               
               admininfo.then((result) => {
                 console.log(result);
                 return res.status(200).json({ page: data.role, info: result });
               });

            }
            else {
               const studentinfo = getStudentInfo(data.name, data.password);
               studentinfo.then((result)=>{
                  console.log(result);
                  return res.status(200).json({ page: data.role , info : result });
               })
               // console.log("poopy baby!!...you are a student")
            }
         }
      })
      if(flag===0){
         console.log("not found")
         return res.status(200).json({ page: "notfound" });
        }
      }
   })
   
   


  







  
}

module.exports = {HandleLogin}