
import { Container, Row } from "react-bootstrap";
import AdminNavBar from "./navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
import Alerts from "../reusable/alerts";
import { Modals } from "../reusable/modal";
export const Studentsofeightclass = () => {
  const [studentsdata, setstudentsdata] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [alertColor, setAlertColor] = useState("");
   const [alertText, setAlertText] = useState("");
   const [showAlert, setShowAlert] = useState(false);
  //  const [modalText, setModalText] = useState("")
  //  const [modalText, setModalText] = useState([])
  //function for get all the students information which is in 6th class.
const navigate = useNavigate();
  async function getstudentinfo() {
    try {
      const response = await axios.get("/student/getclasswisestudents", {
        params: {
          class: 8,
          teacherid: "Pooja6677",
        },
      });
      console.log(response.data);
      setstudentsdata(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  //  console.log(studentsdata)

  const admininfo = useSelector((state) => state.AdminInfo.admininfo);
  useEffect(() => {
    getstudentinfo();
  }, [showAlert]);

  // Function to handle button click
  const handleButtonClick = (student) => {
    console.log("Button clicked for:", student);
    // Perform any action you want with the student data
    console.log(student.user_name);
    console.log(student.class);
    


     setShowModal(true);
     

    removeStudent(student);

      removeStudent(student);
      setShowAlert(true);
      setAlertColor("success");
      setAlertText("Student Remove Successfully!");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

     

  };

  //request for delete student
  async function removeStudent(student) {
    try {
      const response = await axios.delete("/student/removestudent", {
        params: {
          studentinfo: student,
        },
      });
      console.log(response);
    } catch (error) {




      console.log(error);
        setShowAlert(true);
        setAlertColor("danger");
        setAlertText("Error to Remove Student !");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);

    }
  }

  const columns = [
    
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "address1",
      text: "Address",
    },
    {
      dataField: "first_name",
      text: "Name",
    },
    {
      dataField: "password",
      text: "DOB",
    },
    {
      dataField: "phone1",
      text: "Phonenumber",
    },
    {
      dataField: "gender",
      text: "Gender",
    },
    {
      dataField: "user_name",
      text: "User Name",
    },
    {
      dataField: "password",
      text: "Password",
    },
    {
      dataField: "father_name",
      text: "Father Name",
    },
    {
      dataField: "Remove student",
      text: "Remove Student",
      formatter: (cellContent, row) => {
        return (
          <button
            className="btn btn-primary bg-danger"
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
     navigate("/admin/viewstudents");
   }

  

  //  setModalText("Do you really want to Remove ?");
   const  Yes=()=> {
     console.log("yes");
   }

   const  cancel=()=> {
     console.log("no");
   }



  return (
    <>
      <Row>
        <AdminNavBar />
      </Row>
      {/* {showModal?<Modals text={modalText} SaveChanges={Yes} cancel={cancel} />:""} */}

      {showAlert ? <Alerts color={alertColor} text={alertText} /> : ""}

      <Container className="text-black " fluid>
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
            data={studentsdata}
            columns={columns}
          />
        </Row>
      </Container>
      {/* <button onClick={()=>setShowModal(true)}>click</button> */}
    </>
  );
};
