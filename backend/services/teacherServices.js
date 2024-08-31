const { json } = require("body-parser");
const connection = require("../config/dbConnection");

const getTeacherInfo = (name, password) => {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT * FROM `teachers` WHERE `user_name` = ? AND `password` = ?;";

    connection.query(sql, [name, password], (error, results) => {
      if (error) {
        console.log("error occurred in teacherdata file", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getStudentInfo = (name , password)=>{
   return new Promise((resolve,reject)=>{
    const sql = "SELECT * FROM students WHERE user_name = ? AND password = ?";
    connection.query(sql,[name , password],(error,result)=>{
      if(error){
        console.log("error occure in studentdata file",error);
        return  reject(error);
      }
      resolve(result);

    })
   })








}



const getAllTeacherinfo = ()=>{
   return new Promise ((resolve,reject)=>{
    const sql = "SELECT * FROM `teachers`";
   connection.query(sql,(err,result)=>{
    if(err){
      console.log("error occoure for getting information of all teachers for all students",err);
      return;
    }

    // console.log(result);

    resolve(result)
   
   })
   })


}


   function TimetableServices(res){
     return new Promise((resolve,reject)=>{
       const sql = "SELECT * FROM `timetable`";
       connection.query(sql,(err,result)=>{
        if(err){
          console.log(err);
          return;
        }
        res.send(result);
       })
     })
     
   
}



function studentLeaveDataservices(res){
   return new Promise((resolve,reject)=>{
    const sql = "SELECT * FROM `leave_form`";
    connection.query(sql,(err,result)=>{
      if(err){
        console.log(err)
        return res.status(404).send("not found");
      }
      res.status(200).send(result);
    })
   })
   
}



// function addteacherservices(data){
//   return new Promise((resolve,reject)=>{



//    function createUsername(name, aadharNumber) {
//      const aadharStr = String(aadharNumber).trim();
//      const last4Digits = aadharStr.slice(-4);
//      const username = name + last4Digits;
//      return username;
//    }
//    const name = createUsername(data.firstName, data.aadharNumber);
//    const password = `${data.firstName}@123`;

//     const teacherData = [
//       data.firstName,
//       data.lastName,
//       data.dateOfBirth,
//       data.gender,
//       data.address,
//       data.primaryPhone,
//       data.email,
//       data.aadharNumber,
//       data.file,
//       name,
//       data.designation,
//       data.status,
//       data.assignedClass,
//       data.assignedSubject,
//       name,
//       password,
//       data.emergencyContactName,
//       data.emergencyContactNumber,
//       data.bloodGroup
//     ];


//     const sql = 'INSERT INTO teachers( `first_name`, `last_name`, `date_of_birth`, `gender`, `address`, `phone_number`, `email`, `aadhar_number`, `photo`, `employee_id`, `designation`, `status`, `assigned_classes`, `assigned_subjects`, `user_name`, `password`, `emergency_contact_name`, `emergency_contact_number`, `blood_group`) VALUES(?)'
//     connection.query(sql, [teacherData], (error, result) => {
//       if (error) {
//         console.log(error);
//          if (error.code === '23505') {
//            // Duplicate entry (unique constraint violation)
//           return {status:409,json:({ error: 'Teacher already exists' })};
//           } else {
//           return { status: 500, json: { error: "failed to add teacher" } };
//            }
//          }
//       console.log(data);
//       return { status: 201, json: { msg: "successfully submitted" } };
//     });
  




// })
  


// }
function addteacherservices(data) {
  return new Promise((resolve, reject) => {
    function createUsername(name, aadharNumber) {
      const aadharStr = String(aadharNumber).trim();
      const last4Digits = aadharStr.slice(-4);
      const username = name + last4Digits;
      return username;
    }

    const name = createUsername(data.firstName, data.aadharNumber);
    const password = `${data.firstName}@123`;
    
    // insert teacher data into login form

    const login_data = [name, password, "teacher", data.email];
    const sql_login = "INSERT INTO login (`username`, `password`, `role`, `email`) VALUES(?);"
    connection.query(sql_login,[login_data],(error,result)=>{
      if (error) {
        console.log(error);
        if (error.code === "23505") {
          // Handle duplicate entry error
          return reject({ status: 409, message: "Teacher already exists" });
        } else {
          return reject({ status: 500, message: "Failed to add teacher" });
        }
      }
      console.log(data);
      return resolve({ status: 201, message: "Successfully submitted" });
    })



    //insert teacherdata into teacher table
    
    //for teacher table
       const teacherData = [
         data.firstName,
         data.lastName,
         data.dateOfBirth,
         data.gender,
         data.address,
         data.primaryPhone,
         data.email,
         data.aadharNumber,
         data.file,
         name,
         data.designation,
         data.status,
         data.assignedClass,
         data.assignedSubject,
         name,
         password,
         data.emergencyContactName,
         data.emergencyContactNumber,
         data.bloodGroup,
       ];
   
       
 const sql =
   "INSERT INTO teachers( `first_name`, `last_name`, `date_of_birth`, `gender`, `address`, `phone_number`, `email`, `aadhar_number`, `photo`, `employee_id`, `designation`, `status`, `assigned_classes`, `assigned_subjects`, `user_name`, `password`, `emergency_contact_name`, `emergency_contact_number`, `blood_group`) VALUES(?)";


    connection.query(sql, [teacherData], (error, result) => {
      if (error) {
        console.log(error);
        if (error.code === "23505") {
          // Handle duplicate entry error
          return reject({ status: 409, message: "Teacher already exists" });
        } else {
          return reject({ status: 500, message: "Failed to add teacher" });
        }
      }
      console.log(data);
      return resolve({ status: 201, message: "Successfully submitted" });
    });
  });
}

function RemoveTeacherServices(teacher_id,res){
  // console.log("teacher id is",teacher_id)
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM teachers WHERE employee_id= ?";
    connection.query(sql,[teacher_id],(err,result)=>{
      if(err){
        console.log(err);
        return;
      }
      return res.status(200).send("successfully deleted!");
    })
    
  })

}





module.exports = {
  getTeacherInfo,
  getAllTeacherinfo,
  getStudentInfo,
  TimetableServices,
  studentLeaveDataservices,
  addteacherservices,
  RemoveTeacherServices
};
