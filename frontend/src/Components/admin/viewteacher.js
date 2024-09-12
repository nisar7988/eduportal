import { Container, Row } from "react-bootstrap";
import AdminNavBar from "./navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
export const ViewTeacherInfo = () => {
  const [teachersdata, setteachersdata] = useState([]);
  //function for get all the teachers information which is in 6th class.
  const navigate = useNavigate();
    async function getTeacherInfo() {
      try {
        const response = await axios.get("/teacher/getTeachers");
        // console.log(response.data);
        setteachersdata(response.data);
      } catch (error) {
        console.log(error);
      }
    }

   console.log(teachersdata)

  const admininfo = useSelector((state) => state.AdminInfo.admininfo);
    useEffect(() => {
      getTeacherInfo();
    }, []);

  // Function to handle button click
    const handleButtonClick = (teacher) => {
      console.log("Button clicked for:", teacher);
      // Perform any action you want with the teacher data
    
      removeTeacher(teacher);
    };

  //request for delete teacher
    async function removeTeacher(teacher) {
        console.log(teacher);
      try {
        const response = await axios.delete("/teacher/removeteacher", {
          params: {
            teacherinfo: teacher,
          },
        });

        console.log(response);
        alert(response.data)
        clickback();
      } catch (error) {
        console.log(error);
      }
    }

  const columns = [ 
    {
      dataField: "employee_id",
      text: "User Name",
    },
    {
      dataField: "password",
      text: "Password",
    },
    {
      dataField: "phone_number",
      text: "Phonenumber",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "assigned_classes",
      text: "Assigned Class",
    },
    {
      dataField: "assigned_subjects",
      text: "Assigned Subjects",
    },
    {
      dataField: "designation",
      text: "Designation",
    },
    {
      dataField: "emergency_contact_number",
      text: "Emergency Number",
    },
    {
      dataField: "Remove teacher",
      text: "Remove Teacher",
      formatter: (cellContent, row) => {
        return (
          <button
            className="btn btn-primary text-center bg-danger"
            style={{ border: "none" }}
            onClick={() => handleButtonClick(row)}
          >
            Remove
          </button>
        );
      },
    },
  ];

  function clickback() {
    navigate("/admin/");
  }
  return (
    <Container className="text-black" fluid>
      <Row>
        <AdminNavBar />
      </Row>
      <Row className="my-2">
        <h3 className="w-75"> Welcome {admininfo.name}</h3>
        <CloseButton
          style={{ position: "relative", left: "17rem" }}
          onClick={clickback}
        />
      </Row>
      <Row>
        <BootstrapTable
          keyField="aadhar_numbe"
          data={teachersdata}
          columns={columns}
        />
      </Row>
    </Container>
  );
};
