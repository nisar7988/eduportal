import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {StudentHomePage} from "./Components/students/studenthome"
import {TeacherHomePage} from "./Components/teachers/teacherhome"
import { HomePage } from "./Components/HomePage";
import {LogInPage} from "./Components/LogInPage";
import { AdminHomePage } from "./Components/admin/adminhome";
import { NotFound } from "./Components/NotFound";
import { ViewStudents } from "./Components/teachers/viewStudents";
import { ViewProfile } from "./Components/teachers/viewprofile";
import { TimeTable } from "./Components/teachers/timetable";
import { Notes } from "./Components/teachers/notes";
import { AddStudent } from "./Components/teachers/addStudents";
import { Home } from "./Components/teachers/home";
import { EditProfile } from "./Components/teachers/editProfile";
import { StudentHome } from "./Components/students/Home";
import { StudentViewProfile } from "./Components/students/studentviewprofile";
import { ViewTeachers } from "./Components/students/viewteachers";
import { StudentDiary } from "./Components/students/diary";
import { Timetable } from "./Components/students/timetable";
import { StudentAttendence } from "./Components/students/StudentAttendence";
import { MarkAttendence } from "./Components/teachers/Attendence";
import Calendar from "./Components/calender";
import { SendMail } from "./Components/teachers/sendMail";
import { HomeAdmin } from "./Components/admin/Homeadmin";
import { AddStudentByAdmin } from "./Components/admin/addstudent";
import { SendMailbyAdmin } from "./Components/admin/sendMail";
import { AddTeacher } from "./Components/admin/addTeacher";
import { ViewClasswiseAttendence } from "./Components/admin/AttendencebyAdmin";
import { Sixth_class, Sixthclass } from "./Components/admin/Attendenceofsix";
import { SeventhClass, Seventh_class } from "./Components/admin/seventhclass";
import { Eight_class, Eightclass } from "./Components/admin/eightclass";
import { Ninth_class, Ninthclass } from "./Components/admin/nineclass";
import { Tenth_class, Tenthclass } from "./Components/admin/tenthclass";
import { ViewAdminProfile } from "./Components/admin/viewprofiles";
import { ViewStudentsbyAdmin } from "./Components/admin/viewstudents";
import { StudentsofSixthclass } from "./Components/admin/viewstudentssix";
import { StudentsofSeventhclass } from "./Components/admin/viewstudentsseven";
import { Studentsofeightclass } from "./Components/admin/viewstudentseight";
import { StudentsofNineclass } from "./Components/admin/viewstudentsnine";
import { StudentsofTenthclass } from "./Components/admin/viewstudentsten";
import { TimeTableAdmin } from "./Components/admin/timetable";
import { ViewTeacherInfo } from "./Components/admin/viewteacher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentHomePage />}>
            <Route path="/student" element={<StudentHome />} />
            <Route
              path="/student/viewprofile"
              element={<StudentViewProfile />}
            />
            <Route path="/student/viewteachers" element={<ViewTeachers />} />
            <Route path="/student/leave" element={<StudentDiary />} />
            <Route path="/student/timetable" element={<Timetable />} />
            <Route path="/student/calender" element={<Calendar />} />
            <Route path="/student/attendence" element={<StudentAttendence />} />
          </Route>
          <Route path="/teacher" element={<TeacherHomePage />}>
            <Route path="/teacher/viewstudents" element={<ViewStudents />} />
            <Route path="/teacher/editprofile" element={<EditProfile />} />
            <Route path="/teacher/viewprofile" element={<ViewProfile />} />
            <Route path="/teacher/timetable" element={<TimeTable />} />
            <Route path="/teacher/notes" element={<Notes />} />
            <Route path="/teacher/calender" element={<Calendar />} />
            <Route path="/teacher/sendmail" element={<SendMail />} />
            <Route path="/teacher/attendence" element={<MarkAttendence />} />
            <Route path="/teacher/addstudents" element={<AddStudent />} />
            <Route path="/teacher" element={<Home />} />
          </Route>
          <Route path="/admin/studentsix" element={<StudentsofSixthclass />} />
          <Route
            path="/admin/studentseven"
            element={<StudentsofSeventhclass />}
          />
          <Route
            path="/admin/studenteight"
            element={<Studentsofeightclass />}
          />
          <Route path="/admin/studentnine" element={<StudentsofNineclass />} />
          <Route path="/admin/studentten" element={<StudentsofTenthclass />} />
            <Route path="/admin/viewteachers" element={<ViewTeacherInfo />} />
          <Route path="/admin" element={<AdminHomePage />}>
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/admin/calender" element={<Calendar />} />
            <Route path="/admin/addstudents" element={<AddStudentByAdmin />} />
            <Route path="/admin/sendmail" element={<SendMailbyAdmin />} />
            <Route path="/admin/addteacher" element={<AddTeacher />} />
            <Route path="/admin/viewProfile" element={<ViewAdminProfile />} />
            <Route
              path="/admin/viewstudents"
              element={<ViewStudentsbyAdmin />}
            />
            <Route path="/admin/timetable" element={<TimeTableAdmin />} />
            <Route
              path="/admin/attendence"
              element={<ViewClasswiseAttendence />}
            />
            <Route path="/admin/viewattendence_six" element={<Sixthclass />} />
            <Route
              path="/admin/viewattendence_seven"
              element={<SeventhClass />}
            />
            <Route
              path="/admin/viewattendence_eight"
              element={<Eightclass />}
            />
            <Route path="/admin/viewattendence_nine" element={<Ninthclass />} />
            <Route path="/admin/viewattendence_ten" element={<Tenthclass />} />
          </Route>
          <Route path="/login" element={<LogInPage />} />
          <Route path="*" element={<NotFound />} />
          <Route Path="/viewstudents" element={<ViewStudents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
