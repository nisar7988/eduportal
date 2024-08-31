
const express = require("express");
const {
  getTeacherInfo,
  getTimeTable,
  StudentLeaveData,
  AddTeacher,
  RemoveTeacher,
} = require("../controllers/teachercontroller");
const { getAllTeacherinfo } = require("../services/teacherServices");
const router = express.Router();

router.get("/getTeachers", getTeacherInfo);
router.get("/getTimeTable",getTimeTable)
router.get("/StudentLeaveData", StudentLeaveData);
router.post("/addteacher",AddTeacher);
router.delete("/removeteacher",RemoveTeacher);



module.exports = router;