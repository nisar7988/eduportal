

const {
  getAllTeacherinfo,
  TimetableServices,
  studentLeaveDataservices,
  addteacherservices,
  RemoveTeacherServices
} = require("../services/teacherServices");



// for get the data of all teacher for viewteacher component
  
function  getTeacherInfo (req,res) {
 
     getAllTeacherinfo(req,res)
     .then(result=>{
        console.log(result)
        res.send(result);
     })
     .catch(err=>{
        console.log(err);
     })
}

// for get the data of timetable for teacher.


function getTimeTable (req,res){
  TimetableServices(res);
      
}

function StudentLeaveData(req,res){
    studentLeaveDataservices(res);
}

// function AddTeacher(req,res){
//    const response = addteacherservices(req.body);
//    res.status(response.status).json(response.json);

// }

// const { addteacherservices } = require("../services/teacherServices");

const AddTeacher = async (req, res) => {
  try {
    const result = await addteacherservices(req.body);
    res.status(result.status).json({ message: result.message });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};


function RemoveTeacher(req, res){
  // console.log(req.query);
  RemoveTeacherServices(req.query.teacherinfo.employee_id, res);
}




module.exports = {
  getTeacherInfo,
  getTimeTable,
  StudentLeaveData,
  AddTeacher,
  RemoveTeacher,
};
