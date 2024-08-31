// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
// import Row from 'react-bootstrap/Row';
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profileimage from "../../Assets/mathteacher.jpg";

export function EditProfile() {
  return (
    <Container className="text-black p-5">
      <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={profileimage} />
            <Card.Body>
              <Card.Title>Renu Malhal</Card.Title>
              <Card.Text>Math Teacher</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" value="Renu" disabled />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value="Renu@123"
                  disabled
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value="RenuMalhal@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control value="Suite 590 9053 Reichert Lights, Herbertborough, SC 22574-5315" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control value="Suite 590 9053 Reichert Lights, Herbertborough, SC 22574-5315" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value="Surat" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control value="Rajasthan" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control value="	313602" />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formDob">
              <Form.Label>DOB</Form.Label>
              <Form.Control value="02/02/1995" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
          <Button variant="primary">Save changes</Button>{" "}
    </Container>
  );
}
