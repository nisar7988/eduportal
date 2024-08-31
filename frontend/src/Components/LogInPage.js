import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { valid } from "../store/reducer";
import { changeinfo } from "../store/teacherinfoReducer";
import { changeStudentinfo } from "../store/studentinfoReducer";
import { changeAdmininfo } from "../store/admininfoReducer";
export const LogInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [infoData, setInfoData] = useState([]);
  const [adminInfoData , setadminInfoData] = useState([]);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [studentinfoData, setstudentinfoData] = useState([]);
  const [incorrectUserInfo, setincorrectUserInfo] = useState("");
  const bgColor = "rgba(192,192,217,255)";
  let role;
  function HandleChange(e) {
    if (e.target.name === "username") {
      setUserName(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
  //HandleSelect
  function HandleSelect(eventKey) {
    role = eventKey.target.value;
    console.log(role)
  }
  function handleStudentInfoData(Datainfo) {
    setstudentinfoData(Datainfo);
    dispatch(changeStudentinfo(Datainfo[0]));
  }

  const handleInfoData = (Datainfo) => {
    setInfoData(Datainfo);
    dispatch(changeinfo(Datainfo[0]));
  };
  const handleAdminInfoData = (Datainfo) =>{
    setadminInfoData(Datainfo)
    dispatch(changeAdmininfo(Datainfo[0]))
  }

  //HandleSubmit
  function HandleSubmit(e) {
    // e.target.style.backgroundColor="red";
    if (username === "" || password === "" || role === undefined) {
      alert("plaese fill details");
    } else {
      try {
        axios
          .post("/auth/login", {
            name: username,
            password: password,
            role: role,
          })
          .then((res) => {
            const Datainfo = res.data.info;
            console.log(Datainfo);
            if (res.data.page === "notfound") {
              setincorrectUserInfo("incorrect id or password! ");
            } else {
              dispatch(valid());
              navigate(`/${res.data.page}`);
              if (res.data.page === "teacher") {
                handleInfoData(Datainfo);
              } else if (res.data.page === "student") {
                console.log(res.data.page);
                handleStudentInfoData(Datainfo); //baaad mai aayaa......
              }
              else{
                console.log(res.data.page)
                handleAdminInfoData(Datainfo);
              }
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <Container
        id="container"
        style={{ backgroundColor: "rgba(192,192,217,255)" }}
        fluid
      >
        <Row
          style={{
            margin: "0",
            padding: "4% 9%",
            backgroundColor: "rgba(192,192,217,255)",
            color: "rgba(3,1,66,255)",
            boxSizing: "border-box",
          }}
        >
          <Col md="6" id="cover">
            <img
              src="Logo.jpg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </Col>
          <Col id="form">
            <h3>Log in</h3>
            <FloatingLabel
              controlId="floatingInput"
              label="user name"
              className="mb-3 login-input"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="border-0 border-bottom rounded-0   bg-red"
                name="username"
                value={username}
                onChange={HandleChange}
                // onFocus={HandleFocus}
                style={{ backgroundColor: bgColor }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              className="login-input"
              label="Password"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className="border-0 border-bottom border rounded-0"
                name="password"
                value={password}
                onChange={HandleChange}
                style={{ backgroundColor: bgColor }}
              />
            </FloatingLabel>
            <Form.Select
              aria-label="Default select example"
              className="mt-4 login-input border-0 border-bottom border rounded-0 text-black "
              onClick={HandleSelect}
            >
              <option disabled selected>
               Login as 
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </Form.Select>
            <Button
              className="w-75 my-4"
              style={{
                borderRadius: "3rem",
                backgroundColor: "rgba(0,187,167,255)",
                border: "none",
              }}
              onClick={HandleSubmit}
            >
              Log in
            </Button>{" "}
            <br />
            <Form.Text className="text-danger">
              {incorrectUserInfo === "" ? "" : incorrectUserInfo}
            </Form.Text>
          </Col>
        </Row>
      </Container>
    </>
  );
};
              //  <DropdownButton
              //   // id="dropdown-button-dark-example2"
              //   variant="default"
              
              //  title="Log in"
              //   // title={HandleSelect?HandleSelect:"Login"}
              //   className="mt-4  border-bottom login-input"
              //   onSelect={HandleSelect}
              //   style={{ backgroundColor: bgColor }}
              //   // className="login-input"
              // >
                
              //   <Dropdown.Item
              //     eventKey="student"
              //     // title="student"
              //     style={{ backgroundColor: bgColor }}
              //   >
              //     Student
              //   </Dropdown.Item>
              //   <Dropdown.Item
              //     eventKey="teacher"
              //     style={{ backgroundColor: bgColor }}
              //   >
              //     Teacher
              //   </Dropdown.Item>
              //   <Dropdown.Item
              //     eventKey="admin"
              //     style={{ backgroundColor: bgColor }}
              //   >
              //     Admin
              //   </Dropdown.Item>
              // </DropdownButton>
