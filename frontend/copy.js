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

export function MarkAttendence() {
  const Data1 = useSelector((state) => state.TeacherInfo.info);
  const teacher_id = Data1 ? Data1.employee_id : "";
  const teacher_name = Data1 ? Data1.first_name + " " + Data1.last_name : "";
  const [studentData, setStudentData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]); // State to store attendance data
  const [issubmit, setissubmit] = useState(false);
  // const [ismarked , setismarked] = useState('true');
  // const checkboxRef = useRef(null);
  const elementRef = useRef(null);

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
    } catch (err) {
      console.log("error");
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
      // Update the status for the existing student_id
      const updatedData = [...attendanceData];
      updatedData[existingIndex].status = status;
      updatedData[existingIndex].day = day;
      setAttendanceData(updatedData);
    } else {
      // Add a new entry for the student_id
      setAttendanceData([...attendanceData, { student_id, status, day }]);
    }
  }

  async function handleSubmit() {
    try {
      const res = await axios.post("/student/addattendence", attendanceData);
      alert("are you sure ? ");
      setissubmit(true);
      navigate("/teacher");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container className="text-black">
      <Row>
        <Col md="10">
          <p>{teacher_name}</p>
        </Col>
        <Col>
          <b>Date</b>: {currentDate}
        </Col>
      </Row>
      <Row>
        <Table striped="columns">
          <thead>
            <tr className="text-center">
              <th>id</th>
              <th>student_id</th>
              <th>Student Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {studentData.map((item, index) => (
              <tr key={index}>
                <td>{item.roll_number}</td>
                <td>{item.student_id}</td>
                <td>{item.name}</td>
                <td>
                  <Form.Check>
                    <Form.Check.Input
                      type="checkbox"
                      isValid
                      checked={Valid(item.student_id)}
                      onChange={(e) => handleStatusChange(e, item.student_id)}
                      disabled={issubmit}
                    />
                  </Form.Check>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col>
          <button onClick={handleSubmit}>Submit</button>
        </Col>
      </Row>
    </Container>
  );
}
