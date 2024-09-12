import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from 'react-bootstrap/Button';
import Logo from "../../Assets/Logo.jpg";
import Image from "react-bootstrap/Image";
import profileimage from "../../Assets/physicsteacher.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminNavBar() {
  const [login, setLogin] = useState(true);
  const isValid = useSelector((state) => state.LogIn.isValid);
  const navigate = useNavigate();
  useEffect(() => {
    setLogin(isValid);

    if (!login) navigate("/login");
  }, [login, navigate, isValid]);
  
   const Data = useSelector((state) => state.AdminInfo.admininfo);
   const userId = Data ? Data.username : "";
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
      className="px-4"
    >
      <Navbar.Brand as={Link} to="/admin/">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "3rem", borderRadius: "50%" }}
          className="mx-3"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/admin/" style={{ color: "#003366" }}>
            Dashboard
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/admin/viewstudents"
            style={{ color: "#003366" }}
          >
            Class
          </Nav.Link>
          {/* 
          <Nav.Link href="#features" style={{ color: "#003366" }}>
            grads
          </Nav.Link> */}
        </Nav>

        <Nav.Link as={Link} to="/admin/viewProfile">
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNavBar;
