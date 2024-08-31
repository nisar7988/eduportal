import Table from "react-bootstrap/Table";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function ViewStudents() {
  const Data1 = useSelector((state) => state.TeacherInfo.info);
  const teacher_id = Data1 ? Data1.employee_id : "";
  const [studentData, setStudentData] = useState([]);

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

    <Table striped="columns">
      <thead>
        <tr>
          <th>id</th>
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
  );
}
