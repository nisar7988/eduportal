
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import profileimage from "../../Assets/chemistryteacher.jpg"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";



export function ViewProfile() {
  const Data = useSelector((state) => state.TeacherInfo.info);
 
console.log(Data);

  const [imagePath, setImagePath] = useState("");
  const [error, setError] = useState("");
  const userId = Data?Data.user_name:"";
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
    <Container className="text-black p-5 icon">
      <Row>
        <Col md="6">
          <Card className="icon">
            <Card.Img variant="top" src={imagePath} />
            <Card.Body>
              <Card.Title>
                {Data ? `${Data.first_name} ${Data.last_name}` : ""}
              </Card.Title>
              <Card.Text>
                {Data ? Data.assigned_subjects : ""} Teacher
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form className="icon">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={Data ? Data.user_name : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
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
                placeholder="Enter Email"
                value={Data ? Data.email : ""}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Correspondence Address</Form.Label>
              <Form.Control value={Data ? Data.address : ""} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control value={Data ? Data.address : ""} disabled />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Assigned class</Form.Label>
                <Form.Control
                  value={Data ? Data.assigned_classes : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Assigned Subject</Form.Label>
                <Form.Control
                  value={Data ? Data.assigned_subjects : ""}
                  disabled
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Aadhar number </Form.Label>
              <Form.Control value={Data ? Data.aadhar_number : ""} disabled />
            </Form.Group>
            <Form.Group as={Col} controlId="formDob">
              <Form.Label>DOB</Form.Label>
              <Form.Control value={Data ? Data.date_of_birth : ""} disabled />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Phone number </Form.Label>
                <Form.Control value={Data ? Data.phone_number : ""} disabled />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Alternate Phone number </Form.Label>
                <Form.Control
                  value={Data ? Data.emergency_contact_number : ""}
                  disabled
                />
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
