import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function StudentViewProfile() {
  const StudentData = useSelector((state)=> state.StudentInfo.studentinfo)
  // console.log(StudentData)
    const [imagePath, setImagePath] = useState("");
    const [error, setError] = useState("");
    const userId = StudentData?StudentData.user_name:"";

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
    <Container className="text-black p-5">
      <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={imagePath} />
            <Card.Body>
              <Card.Title>
                {StudentData
                  ? `${StudentData.first_name} ${StudentData.last_name}`
                  : ""}
              </Card.Title>
              <Card.Text>Student</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={StudentData ? `${StudentData.user_name}` : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="text"
                  value={StudentData ? `${StudentData.password}` : ""}
                  disabled
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={StudentData ? `${StudentData.email}` : ""}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Correspondence Address</Form.Label>
              <Form.Control
                value={StudentData ? `${StudentData.address1}` : ""}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control
                value={StudentData ? `${StudentData.address2}` : ""}
                disabled
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={StudentData ? `${StudentData.city}` : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  value={StudentData ? `${StudentData.state}` : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  value={StudentData ? `${StudentData.zip}` : ""}
                  disabled
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formDob">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                value={StudentData ? `${StudentData.password}` : ""}
                disabled
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
