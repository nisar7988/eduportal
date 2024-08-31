
const express = require('express');
const router = express.Router();
const {
  handleStudentAdd,
  getStudents,
  setAttendence,
  getAttendence,
  getAttendenceForStudent,
  getTimeTableforStudent,
  Leave_Form,
  getclasswisestudents,
  removeStudent
} = require("../controllers/studentcontroller");
const { route } = require('./authRoutes');
  
router.post("/addstudent", handleStudentAdd);
router.post("/addattendence", setAttendence);
router.get("/getStudents", getStudents);
router.get("/getattendence",getAttendence);
router.get("/attendence",getAttendenceForStudent)
router.get("/getTimeTable", getTimeTableforStudent);
router.post("/leave_form",Leave_Form);
router.get("/getclasswisestudents",getclasswisestudents);
router.delete("/removestudent",removeStudent);


module.exports = router;