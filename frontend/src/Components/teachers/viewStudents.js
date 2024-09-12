import Table from "react-bootstrap/Table";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export function ViewStudents() {
  const Data1 = useSelector((state) => state.TeacherInfo.info);
  const teacher_id = Data1 ? Data1.employee_id : "";
  const class_id = Data1 ? Data1.assigned_classes : "";
  const [studentData, setStudentData] = useState([]);
   const date = new Date();
   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();
   let currentDate = `${day}-${month}-${year}`;



  useEffect(() => {
    async function GetStudentData() {
      try {
        const res = await axios.get("/student/getStudents", {
          params: {
            teacher: teacher_id,
          },
        });
        setStudentData(res.data); // Update state with the entire array of students
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
  }, [teacher_id]); // Add teacher_id as a dependency to re-fetch if it changes

  return (
    <Container className="icon py-2">
      <Row>
        <Col md="10">
          <p>
            <b>class</b> : {class_id} 
          </p>
        </Col>
        <Col>
          <b>Date</b> : {currentDate}
        </Col>
      </Row>
      <Row className="p-2 icon">
        <Table striped="columns">
          <thead>
            <tr>
              <th>Roll No </th>
              <th>Student Name</th>
              <th>Father Name</th>
              <th>Phone number</th>
            </tr>
          </thead>

          <tbody>
            {studentData.map((item, index) => (
              <tr key={index}>
                <td>{item.roll_number}</td>
                <td>{item.name}</td>
                <td>{item.father_name}</td>
                <td>{item.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
