import { useRef } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alerts from "../reusable/alerts";

export function MarkAttendence() {
  const Data1 = useSelector((state) => state.TeacherInfo.info);
  const [alertColor, setAlertColor] = useState("");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const teacher_id = Data1 ? Data1.employee_id : "";
  const teacher_name = Data1 ? Data1.first_name + " " + Data1.last_name : "";
  const [studentData, setStudentData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]); // State to store attendance data
  const [issubmit, setissubmit] = useState(false);
  // const [ismarked , setismarked] = useState('true');
  // const checkboxRef = useRef(null);
  // const elementRef = useRef(null);
  const elementRefs = useRef([]);
  const class_id = Data1 ? Data1.assigned_classes : "";
  const [Messege, setMessge] = useState("");
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  let [studentAttendence, setstudentattendence] = useState([]);
  const navigate = useNavigate();

  async function GetAttendence() {
    try {
      const res = await axios.get("/student/getattendence", {
        params: { class_id: Data1.assigned_classes, daye: day },
      });
      setstudentattendence(res.data);
      console.log(res);
      console.log(studentAttendence);
    } catch (err) {
      console.log("error");
      // setMessge("you don't have a class yet");
    }
  }
  useEffect(() => {
    GetAttendence();
  }, []);
  function Valid(student_id) {
    const ab = studentAttendence.some((item) => {
      if (item.student_id == student_id) {
        if ("1" == item.Day) {
          return true;
        }
      }
      return false;
    });
    return ab;
  }
  useEffect(() => {
    async function GetStudentData() {
      try {
        const res = await axios.get("/student/getStudents", {
          params: { teacher: teacher_id },
        });
        setStudentData(res.data);
      } catch (err) {
        console.log(
          "Error occurred while getting data from students class",
          err
        );
      }
    }
    if (teacher_id !== "") {
      GetStudentData();
    }
  }, [teacher_id]);
 
  function handleStatusChange(e, student_id) {
    const status = e.target.checked;

    // Check if the student_id is already in attendanceData
    const existingIndex = attendanceData.findIndex(
      (item) => item.student_id === student_id
    );

    if (existingIndex !== -1) {
      const updatedData = [...attendanceData];
      updatedData[existingIndex].status = status;
      updatedData[existingIndex].day = day;
      setAttendanceData(updatedData);
    } else {
      setAttendanceData([...attendanceData, { student_id, status, day }]);
    }
  }
  // function ab() {
  //   console.log("click");
  // }
  async function handleSubmit() {
    try {
      const res = await axios.post("/student/addattendence", attendanceData);
  
      setissubmit(true);
      setShowAlert(true);
      setAlertColor("success");
      setAlertText("Attendence Mark Successfully!");
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      // navigate('/teacher/')
    } catch (err) {
       setShowAlert(true);
       setAlertColor("danger");
       setAlertText("Error to Mark Attendence !");
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      console.log(err);
    }
  }

  return (
    <>
      {showAlert ? <Alerts color={alertColor} text={alertText} /> : ""}
      <Container className="text-black">
        <Row className="my-3">
          <Col md="10">
            {" "}
            <b>class</b> : {class_id}{" "}
          </Col>
          <Col>
            <b>Date</b>: {currentDate}
          </Col>
        </Row>
        <Row>
          <Table striped="columns">
            <thead>
              <tr className="text-center">
                <th>Roll No.</th>
                {/* <th>Student id</th> */}
                <th>Student Name</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {studentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.roll_number}</td>
                  {/* <td>{item.student_id}</td> */}
                  <td>{item.name}</td>
                  <td>
                    <Form.Check>
                      <Form.Check.Input
                        // ref={elementRef}
                        ref={(el) => (elementRefs.current[index] = el)}
                        type="checkbox"
                        isValid
                        checked={Valid(item.student_id)}
                        onClick={(e) => {
                          const val = elementRefs.current[index];
                          if (Valid(item.student_id)) {
                            console.log("checked");
                            console.log(val.nextElementSibling.textContent);
                            val.style.backgroundColor = "red";
                          } else {
                            console.log("false");
                            val.style.backgroundColor = "green";
                          }
                        }}
                        onChange={(e) => handleStatusChange(e, item.student_id)}
                        // disabled={issubmit}
                      />
                      <span></span>
                    </Form.Check>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col>
            <button
              onClick={handleSubmit}
              className="border-0 p-2 text-white rounded button"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// import { useRef } from "react";
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// export function MarkAttendence() {
//     const [isChecked, setIsChecked] = useState(false);
//   const Data1 = useSelector((state) => state.TeacherInfo.info);
//   const teacher_id = Data1 ? Data1.employee_id : "";
//   const teacher_name = Data1 ? Data1.first_name + " " + Data1.last_name : "";
//   const [studentData, setStudentData] = useState([]);
//   const [attendanceData, setAttendanceData] = useState([]); // State to store attendance data
//   const [issubmit , setissubmit] = useState(false);
//   // const [ismarked , setismarked] = useState('true');
//   // const checkboxRef = useRef(null);
//   const elementRef = useRef(null);
//   const handleCheckboxChange = (event, student_id) => {
//     console.log(event.target)
//     console.log(student_id)
//     setIsChecked(event.target.checked);
//      handleStatusChange(event, student_id);
//   };

//   const date = new Date();
//   let day = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let currentDate = `${day}-${month}-${year}`;
//   let [studentAttendence , setstudentattendence] = useState([]);
//   const navigate = useNavigate();

//   async function GetAttendence() {
//     try {
//       const res = await axios.get("/student/getattendence",{params:{class_id:Data1.assigned_classes,daye:day}});
//       setstudentattendence(res.data)
//      } catch (err) {
//        console.log("error");
//      }
//    }
//   useEffect(() => {
//     GetAttendence();
//   }, []);
//   function Valid(student_id){
//     const ab = studentAttendence.some(item=>{
//       if(item.student_id==student_id){
//         if("1"==item.Day){
//           return true;
//         }
//         }
//         return false;
//     })
//     return ab;
//   }
//   useEffect(() => {
//     async function GetStudentData() {
//       try {
//         const res = await axios.get("/student/getStudents", {
//           params: { teacher: teacher_id },
//         });
//         setStudentData(res.data);
//       } catch (err) {
//         console.log(
//           "Error occurred while getting data from students class",
//           err
//         );
//       }
//     }
//     if (teacher_id !== "") {
//       GetStudentData();
//     }
//   }, [teacher_id]);

//   function handleStatusChange(e, student_id) {

//   if(isChecked){

//   console.log("handlestatuschnge runs")

//     // Check if the student_id is already in attendanceData
//     const existingIndex = attendanceData.findIndex(
//       (item) => item.student_id === student_id
//     );

//     if (existingIndex !== -1) {
//       // Update the status for the existing student_id
//       const updatedData = [...attendanceData];
//       updatedData[existingIndex].status = isChecked;
//       updatedData[existingIndex].day = day;
//       setAttendanceData(updatedData);
//     } else {
//       // Add a new entry for the student_id
//       setAttendanceData([...attendanceData, { student_id, isChecked  ,day}]);
//     }
//   }
//   }

//    async function handleSubmit() {

//       try {
//         const res =await axios.post("/student/addattendence", attendanceData);
//         alert("are you sure ? ")
//         setissubmit(true);
//         navigate('/teacher')
//       } catch (err) {
//         console.log(err);
//       }
//     }

//   return (
//     <Container className="text-black">
//       <Row>
//         <Col md="10">
//           <p>{teacher_name}</p>
//         </Col>
//         <Col>
//           <b>Date</b>: {currentDate}
//         </Col>
//       </Row>
//       <Row>
//         <Table striped="columns">
//           <thead>
//             <tr className="text-center">
//               <th>id</th>
//               <th>student_id</th>
//               <th>Student Name</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {studentData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.roll_number}</td>
//                 <td>{item.student_id}</td>
//                 <td>{item.name}</td>
//                 <td>
//                   <Form.Check>
//                     <Form.Check.Input
//                       type="checkbox"
//                       isValid
//                       checked={isChecked}
//                       onChange={e=>handleCheckboxChange(e,item.student_id)}
//                       disabled={issubmit}
//                     />
//                   </Form.Check>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <Col>
//           <button onClick={handleSubmit}>Submit</button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
