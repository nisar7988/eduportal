
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import profileimage from "../../Assets/physicsteacher.jpg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export function ViewAdminProfile() {
  const Data = useSelector((state) => state.AdminInfo.admininfo);
  const userId = Data ? Data.username : "";
   const [imagePath, setImagePath] = useState("");
   const [error, setError] = useState("");


      useEffect(() => {
        const fetchImagePath = async () => {
          try {
            const res = await axios.get(
              `/upload/getImageByStudentId/${userId}`
            );
            console.log(res.data);
            setImagePath(res.data.filePath); // assuming the API response has filePath
          } catch (err) {
            setError("Failed to fetch image");
          }
        };
        fetchImagePath();
      }, [imagePath]);


  console.log(Data);

  return (
    <Container className="text-black p-5">
      <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={imagePath} />
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
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  value={Data ? Data.username : ""}
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
                placeholder="Enter email"
                value={Data ? Data.email : ""}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Correspondence Address</Form.Label>
              <Form.Control value={Data ? Data.address1 : ""} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control value={Data ? Data.address2 : ""} disabled />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Aadhar Number </Form.Label>
                <Form.Control
                  value={Data ? Data.aadhaar_card_number : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control value={Data ? Data.zipcode : ""} disabled />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formDob">
              <Form.Label>DOB</Form.Label>
              <Form.Control value={Data ? Data.dob : ""} disabled />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Phone Number </Form.Label>
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
