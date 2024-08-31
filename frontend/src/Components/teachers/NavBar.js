import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from 'react-bootstrap/Button';
import Logo from "../../Assets/Logo.jpg"
import Image from "react-bootstrap/Image";
import profileimage from "../../Assets/mathteacher.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function TeacherNavBar() {
  const [login, setLogin] = useState(true);
  const isValid = useSelector((state) => state.LogIn.isValid);
  const navigate = useNavigate();
  useEffect(() => {
    setLogin(isValid);

    if (!login) navigate("/login");
  }, [login, navigate, isValid]);


  
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "rgba(192,192,217,255)",
        color: "#2E2D88",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "3rem", borderRadius: "50%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: "#003366" }}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="#features" style={{ color: "#003366" }}>
              class
            </Nav.Link>
           
            <Nav.Link href="#features" style={{ color: "#003366" }}>
              grads
            </Nav.Link>
          </Nav>

          <Nav>
            <Image src={profileimage} style={{height:'3rem',width:'3rem',borderRadius:'50%',objectFit:"cover"}}  />{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TeacherNavBar;
