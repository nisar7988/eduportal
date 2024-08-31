// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
// import Row from 'react-bootstrap/Row';
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profileimage from "../../Assets/mathteacher.jpg";
import { useSelector } from "react-redux";
// import { useState } from 'react';
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export function ViewAdminProfile() {
  //  const [login,setLogin] =useState(true)
  //   const isValid = useSelector((state) => state.LogIn.isValid);
  const Data = useSelector((state) => state.AdminInfo.admininfo);

  // const navigate = useNavigate();
  // useEffect(()=>{
  //   setLogin(isValid)

  //   if(!login)
  //   navigate("/login");
  // },[login,navigate,isValid])

  console.log(Data);

  return (
    <Container className="text-black p-5">
      <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={profileimage} />
            <Card.Body>
              <Card.Title>{Data ? `${Data.name}` : ""}</Card.Title>
              <Card.Text>Admin</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridusername">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  value={Data ? Data.username : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={Data ? Data.password : ""}
                  disabled
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={Data ? Data.email : ""}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control value={Data ? Data.address1 : ""} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control value={Data ? Data.address2 : ""} disabled />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Aadhar number </Form.Label>
                <Form.Control
                  value={Data ? Data.aadhaar_card_number : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>zip Code</Form.Label>
                <Form.Control value={Data ? Data.zipcode : ""} disabled />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formDob">
              <Form.Label>DOB</Form.Label>
              <Form.Control value={Data ? Data.dob : ""} disabled />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Phone number </Form.Label>
                <Form.Control value={Data ? Data.phone_number1 : ""} disabled />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Alternate Phone number </Form.Label>
                <Form.Control value={Data ? Data.phone_number2 : ""} disabled />
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
