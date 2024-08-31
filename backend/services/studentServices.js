const { promises } = require("nodemailer/lib/xoauth2");
const connection = require("../config/dbConnection");

// Function to handle student class data insertion
const StudentClasses = (values) => {
  // Extract class from values
  const Class = values.class;
  // Prepare data array for insertion
  const Data = [
    values.name,
    values.gender,
    "A", // Assuming section is always 'A'
    values.student_id,
    values.address,
    values.father_name,
    values.mother_name,
    values.phone_number,
    values.email,
  ];
  // Function to insert data into the specified class table
  function InsertData(Class_name) {
    const sql = `INSERT INTO ${Class_name}(name,gender,section,student_id,address,father_name,mother_name,phone_number,email) VALUES(?,?,?,?,?,?,?,?,?)`;
    connection.query(sql, Data, (err, result) => {
      if (err) {
        console.log("Error occurred in InsertData function", err);
        return;
      }
      console.log(result);
    });
  }
  // Switch case to determine the class table and insert data accordingly
  switch (Class) {
    case "6":
      // Insert data into class_sixth table
      InsertData("class_sixth");
      break;
    case "7":
      // Insert data into class_seventh table
      InsertData("class_seventh");
      break;
    case "8":
      // Insert data into class_eight table
      InsertData("class_eight");
      break;
    case "9":
      // Insert data into class_nine table
      InsertData("class_nine");
      break;
    case "10":
      // Insert data into class_ten table
      InsertData("class_ten");
      break;
    default:
      // Handle case where class does not exist
      console.log("No table exists for the specified class");
  }
  // Log the values for debugging purposes
  console.log(values);
};
// send the data of students according to their classes to their class teacher....
function getclass_Name(teacher){
  console.log(teacher)
  return new Promise((resolve, reject) => {
    
    const sql1 = `SELECT class_name FROM class_manage LEFT JOIN teachers ON teachers.employee_id = class_manage.coordinator_id WHERE teachers.employee_id='${teacher}'`;
    connection.query(sql1,(err,result)=>{
      if(err){
        console.log("error occure in joins",err);
        return;
      }
      console.log(result);
     const Data = result[0].class_name;
     console.log(Data)
     resolve(Data);
    })
  })
}
//function for add data of students in to their corrosponding classes.
  function StudentDataClassWise(req,res){
    console.log(req.query.teacher);
    const teacher = req.query.teacher;
    getclass_Name(teacher)
    .then(Data=>{ 
      const sql = `SELECT * FROM ${Data}`;
      connection.query(sql, (err, result) => {
        if (err) {
          console.log(
            "erroe occure in take data from databse in studentDataClassWise",
            err
          );
          return;
        }
        res.send(result);
      });
    })
    .catch(err=>{
      console.log("error");
    })
}
//function of add data of student into the attendence table 
// { student_id: 'Neeru3454', class_id: '8' }
  function Student_Attendence(Attendence_student){
   const sql = "INSERT INTO attendence_temp(student_id, class_id) VALUES(?,?)"
   connection.query(sql,[Attendence_student.student_id,Attendence_student.class_id],(err,result)=>{
    if(err){
      console.log("error occure while addting data into attendence table",err);
      return;
    }
    console.log("data successfully added");
   })
  }
  function HandleStatus(status,res){
    console.log(status);
    const Students = status;
    Students.map((item,index)=>{
      console.log(`${index}:${item.status}`);
      const sql = `UPDATE attendence_temp SET Day${item.day} = ? WHERE student_id = '${item.student_id}'`;
      connection.query(sql,item.status,(err,result)=>{
        if(err){
          console.log(err);
          return;
        }
        console.log("successfully added");
      })
    })
    return res.json({ message: "okay done" }); 
  }


  function getStudentAttendence(req,res){
    // { class_id: '6', daye: '18' }
    const class_id = req.query.class_id;
    // classofstudent = req.query.class_id;
    const day = req.query.daye;
    const sql = `SELECT Day${day} AS Day, Day${day},student_id FROM attendence_temp WHERE class_id=${class_id}`;
    connection.query(sql,(err,result)=>{
      console.log(result);
      res.send(result);
    })
   console.log(class_id)  
   console.log(req.query)
  }
  function particullarStudentAttendence(req,res){
    // { user_name: 'Jaanvi9812', password: '2017-11-30' }
      console.log(req.query);
      return new Promise((reject,resolve)=>{
       const sql = "SELECT * FROM attendence_temp WHERE student_id= ? ";
       connection.query(sql,[req.query.user_name],(err,result)=>{
        if(err){
          console.log(err);
          return reject(err)
        }
        console.log(result)
        res.send(result);

       })
      })
  }

  function TimetableServicesforstudent(req,res) {
    console.log(req.query);

    return new Promise((resolve,reject)=>{
      const sql = 'SELECT * FROM `timetable` WHERE class_id = ?'
      connection.query(sql, [req.query.class], (err, result)=>{
        if(err){
          console.log(err);
          return;
        }
        res.status(200).send(result);
      });

    })
  }


  function Leave_FormServices (req , res) {
    const data = req;
    // console.log(data.class_id)
    const sql =
      "INSERT INTO leave_form (`user_name`, `first_Date`, `last_Date`, `Reason`, `phone`, `class_id`) VALUES(?,?,?,?,?,?)";
    connection.query(
      sql,
      [
        data.userid,
        data.firstDate,
        data.lastDate,
        data.reason,
        data.phone,
        data.class_id
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(404).send("problem in storing data");
        }
        res.status(200).send("Form successfully submitted ");
      }
    );
  }
  //
  const getStudentsServices = (data,res)=>{
    // return "noopppp"
    return new Promise((resolve,reject)=>{
     const sql = "SELECT * FROM students WHERE class = ?";
     connection.query(sql,[data.class],(err,result)=>{
           if(err){
            console.log(err);
            return;
           }
           return res.status(200).send(result)
     })
    })
   

  }

//to insert the data of delete student in Paststudentrecord table 
function pastStudentRecord(studentdata){

  // for get the values of object in array.
const studentValues = Object.values(studentdata);
const sql1 =
  "INSERT INTO students_left_school (`first_name`, `last_name`, `father_name`, `mother_name`, `email`, `phone1`, `phone2`, `class`, `date_of_birth`, `address1`, `address2`, `city`, `state`, `zip`, `nationality`, `religion`, `blood_group`, `created_at`, `aadhar_number`, `user_name`, `password`, `gender` ) VALUES(?)";
  connection.query(sql1,[studentValues],(err,result)=>{
    if(err){
      console.log("error occure in insert data into table of left students",err);
      return;
    }
    console.log("insert successfully");
  })
console.log(studentValues);
}


  //  removeformlogin(studentdata.user_name);
  function  removeformlogin(user_name){
   const sql2 = ` DELETE FROM login WHERE username= ? `;
    connection.query(sql2, [user_name], (err, result) => {
      if (err) {
        console.log("can'nt remove student", err);
        return;
      }
      console.log("successfully remove student");
    
    });
  }



 function removefromattendencetemp(user_name){
       const sql3 = `DELETE FROM attendence_temp WHERE student_id = ?`;
       connection.query(sql3, [user_name], (err, result) => {
         if (err) {
           console.log("can'nt remove student", err);
           return;
         }
         console.log("successfully remove student");
       });
  }

  function removefromtheirclass(user_name,Class){
    // if(Class==='6'){
     let  class_name
    // }
    switch (Class) {
      case '6':
        class_name = 'class_sixth';
        break;
      case '7':
        class_name = 'class_seventh';
        break;
      case '8':
        class_name = 'class_eight';
        break;
      case '9':
        class_name = 'class_nine';
        break;
      case '10':
        class_name = 'class_ten';
        break;  
      default :
      break;
    }
    const sql4 = `DELETE FROM  ${class_name} WHERE student_id = ?`;
    connection.query(sql4, [user_name], (err, result) => {
      if (err) {
        console.log("can'nt remove student", err);
        return;
      }
      console.log("successfully remove student");
    });



  }




// delete student from a table

 function removeStudentService(studentdata,res){
   return new Promise((resolve,reject)=>{

     const sql = `DELETE FROM students WHERE user_name= ? ` 
     

     connection.query(sql,[studentdata.user_name],(err,result)=>{
       if(err){
         console.log("can'nt remove student",err);
         return
       }
       console.log("successfully remove student");
   pastStudentRecord(studentdata);
   removeformlogin(studentdata.user_name);
   removefromattendencetemp(studentdata.user_name);
   removefromtheirclass(studentdata.user_name,studentdata.class)
    res.status(200).send("student successfully deleted!");
     })

   })

   //  console.log(userid);
 }








module.exports = {
  StudentClasses,
  StudentDataClassWise,
  Student_Attendence,
  HandleStatus,
  getStudentAttendence,
  particullarStudentAttendence,
  TimetableServicesforstudent,
  Leave_FormServices,
  getStudentsServices,
  removeStudentService,
};