import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

export const SendMailbyAdmin = () => {
  const Data = useSelector((state) => state.TeacherInfo.info);
  const teacher_name = Data ? `${Data.first_name} ${Data.last_name}` : "";
  const teacher_email = Data ? Data.email : "";

  const [parentEmails, setParentEmails] = useState("");
  const [meetingPurpose, setMeetingPurpose] = useState("Ptm");
  const [customPurpose, setCustomPurpose] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "parentEmails":
        setParentEmails(value);
        // Check if the email field is empty
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            parentEmails: "Parent's emails are required.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            parentEmails: null,
          }));
        }
        break;
      case "date":
        setDate(value);
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            date: "Date is required.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            date: null,
          }));
        }
        break;
      case "time":
        setTime(value);
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            time: "Time is required.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            time: null,
          }));
        }
        break;
      case "venue":
        setVenue(value);
        if (!value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            venue: "Venue is required.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            venue: null,
          }));
        }
        break;
      case "customPurpose":
        setCustomPurpose(value);
        break;
      default:
        break;
    }
  };

  const handlePurposeChange = (e) => {
    setMeetingPurpose(e.target.value);
    if (e.target.value !== "other") {
      setCustomPurpose("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!parentEmails) {
      validationErrors.parentEmails = "Parent's emails are required.";
    }

    if (!date) {
      validationErrors.date = "Date is required.";
    }

    if (!time) {
      validationErrors.time = "Time is required.";
    }

    if (!venue) {
      validationErrors.venue = "Venue is required.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const emailInfo = {
        teachername: teacher_name,
        meetingDetails: {
          date: date,
          time: time,
          venue: venue,
        },
        parentEmail: parentEmails.split(",").map((email) => email.trim()),
        teacher_email: teacher_email,
        customPurpose:
          meetingPurpose === "other" ? customPurpose : meetingPurpose,
      };

      //   console.log(emailInfo);
      // Send emailInfo to your backend or wherever it's needed
      <Alert variant="primary">This is a Primary alert—check it out!</Alert>;
      sendEmail(emailInfo);
    }
  };

  async function sendEmail(emailInfo) {
    try {
      const response = await axios.post("/email/send-parent-email", emailInfo);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container className="text-black p-3">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Teacher Name</Form.Label>
            <Form.Control type="text" value={teacher_name} disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" value={teacher_email} disabled />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Parent's Emails</Form.Label>
          <Form.Control
            placeholder="Enter the emails to send information"
            name="parentEmails"
            value={parentEmails}
            onChange={handleInputChange}
            isInvalid={!!errors.parentEmails}
          />
          <Form.Control.Feedback type="invalid">
            {errors.parentEmails}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridbody">
          <Form.Label>Enter Purpose of Sending Mail</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={meetingPurpose}
            onChange={handlePurposeChange}
          >
            <option value="Perents teacher meeting">
              For Parent Teacher Meeting
            </option>
            <option value="School annual function">
              For Annual Function Invitation
            </option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>

        {meetingPurpose === "other" && (
          <Form.Group className="mb-3" controlId="formGridCustomPurpose">
            <Form.Label>Custom Purpose</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="customPurpose"
              value={customPurpose}
              onChange={handleInputChange}
              placeholder="Write your custom purpose here..."
            />
          </Form.Group>
        )}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGriddate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={handleInputChange}
              isInvalid={!!errors.date}
            />
            <Form.Control.Feedback type="invalid">
              {errors.date}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridtime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={time}
              onChange={handleInputChange}
              isInvalid={!!errors.time}
            />
            <Form.Control.Feedback type="invalid">
              {errors.time}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridvenue">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              type="text"
              name="venue"
              value={venue}
              onChange={handleInputChange}
              isInvalid={!!errors.venue}
            />
            <Form.Control.Feedback type="invalid">
              {errors.venue}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button className="button" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
