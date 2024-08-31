// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
// import Row from 'react-bootstrap/Row';
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profileimage from "../../Assets/student.jpg";
// import { StudentData } from "./studentdata";
// import useSel
import { useSelector } from "react-redux";

export function StudentViewProfile() {
  const StudentData = useSelector((state)=> state.StudentInfo.studentinfo)
  // console.log(StudentData)
 
  return (
    <Container className="text-black p-5">
      <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={profileimage} />
            <Card.Body>
              <Card.Title>
                {StudentData ? `${StudentData.first_name} ${StudentData.last_name}` : ""}
              </Card.Title>
              <Card.Text>Student</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  value={StudentData ? `${StudentData.user_name}` : ""}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
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
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={StudentData ? `${StudentData.address1}` : ""}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
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
                  value={StudentData ? `${StudentData.Zip}` : ""}
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
