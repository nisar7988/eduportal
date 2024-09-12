import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Assets/Logo.jpg";
import Image from "react-bootstrap/Image";
import profileimage from "../../Assets/profile.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function StudentNavBar() {
    
   const Data = useSelector(
     (state) => state.StudentInfo.studentinfo);
   const userId = Data ? Data.user_name : "";
     const [imagePath, setImagePath] = useState("");
     const [error, setError] = useState("");


  useEffect(() => {
    const fetchImagePath = async () => {
      try {
        const res = await axios.get(`/upload/getImageByStudentId/${userId}`);
        console.log(res.data);
        setImagePath(res.data.filePath); // assuming the API response has filePath
      } catch (err) {
        setError("Failed to fetch image");
      }
    };
    fetchImagePath();
  }, [imagePath]);



  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "rgba(192,192,217,255)",
        color: "#2E2D88",
      }}
      className="px-5"
    >
      <Navbar.Brand as={Link} to="/student/">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "3rem", borderRadius: "50%" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/student/" style={{ color: "#003366" }}>
            Dashboard
          </Nav.Link>
          {/* <Nav.Link href="#features" style={{ color: "#003366" }}>
              class
            </Nav.Link>

            <Nav.Link href="#features" style={{ color: "#003366" }}>
              grads
            </Nav.Link> */}
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/student/viewprofile">
            {imagePath ? (
              <img
                src={`${imagePath}`} // Adjust the path as needed
                alt="Fetched from backend"
                style={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Image
                src={profileimage}
                style={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default StudentNavBar;
