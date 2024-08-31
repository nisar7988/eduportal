const express = require("express");
const connection = require("../config/dbConnection");
const {
  StudentClasses,
  StudentDataClassWise,
  Student_Attendence,
  HandleStatus,
  getStudentAttendence,
  particullarStudentAttendence,
  TimetableServicesforstudent,
  Leave_FormServices,
  getStudentsServices,
  removeStudentService
} = require("../services/studentServices");
const { assign } = require("nodemailer/lib/shared");

const handleStudentAdd = (req, res) => {
  //data recived from addstudent 
  const data = req.body;
  console.log(data.firstName);

  //create aaray for aading values in student table;
    // create username and password for login table
    // {
        const name = createUsername(data.firstName, data.aadhar);
        const password = `${data.dateOfBirth}`;
    // }
    const values = [
      data.firstName,
      data.lastName,
      data.aadhar,
      data.fatherName,
      data.motherName,
      data.email,
      data.phone1,
      data.phone2,
      data.class,
      data.dateOfBirth,
      data.address1,
      data.address2,
      data.city,
      data.state,
      data.zip,
      data.nationality,
      data.religion,
      data.bloodGroup,
      name,
      password,
      data.gender
    ];
    
   //create object for insert data in class table 
   const fullname = `${data.firstName} ${data.lastName}`;
    const Student = {
      name:data.firstName,
      gender: data.gender,
      secttion: "A",
      student_id: name,
      address: data.address1,
      father_name: data.fatherName,
      mother_name: data.motherName,
      phone_number: data.phone1,
      email : data.email,
      class : data.class
    };


   const Attendence_student = {
     student_id: name,
     class_id: data.class
   };
















  const sql = `INSERT INTO students (
      first_name, last_name, aadhar_number, father_name, mother_name, email,
      phone1, phone2, class, date_of_birth, address1, address2,
      city, state, zip, nationality, religion, blood_group ,user_name, password,gender
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,? )`;
   
    function createUsername(name, aadharNumber) {
      const aadharStr = String(aadharNumber).trim();
      const last4Digits = aadharStr.slice(-4);
      const username = name + last4Digits;
      return username;
    }

    const sql1 = "INSERT INTO login (`username`,`password`,`role`,`email`) VALUES(?,?,?,?)"


    const values1 = [name, password, "student", data.email];
   
   connection.query(sql1,values1,(err,result)=>{
    if(err){
        console.log("error occure in adding data in login Page",err);
        return;
    }
    console.log(result)
   })


   //add data into class table according to their classes..

   StudentClasses(Student);
  
   //add data of student into attendence table...
   Student_Attendence(Attendence_student);
   


  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log("Error occurred:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    // console.log("Result:", result);
    return res.status(200).json({ message: "Successfully added student" });
  });
};




//for get the data of students
  
function  getStudents (req,res) {
  //  console.log(req.query.teacher);
     StudentDataClassWise(req,res);

}


function setAttendence (req,res) {
  HandleStatus(req.body,res);
}


function getAttendence(req,res){
   getStudentAttendence(req,res);
}


function getAttendenceForStudent(req,res) {
    
      
    particullarStudentAttendence(req,res);
}

function getTimeTableforStudent(req, res) {
  TimetableServicesforstudent(req,res);
}


function Leave_Form(req,res){
   Leave_FormServices(req.body,res);
}

// getclasswisestudents for admin 
 function getclasswisestudents(req,res){
    getStudentsServices(req.query,res)
  }

// for remove student from student table .

function removeStudent(req, res){
   console.log("request body is :",req.query)  
   removeStudentService(req.query.studentinfo, res);

}




module.exports = {
  handleStudentAdd,
  getStudents,
  setAttendence,
  getAttendence,
  getStudentAttendence,
  getAttendenceForStudent,
  getTimeTableforStudent,
  Leave_Form,
  getclasswisestudents,
  removeStudent,
};
