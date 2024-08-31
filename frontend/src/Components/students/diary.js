import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { Modal_ex } from "../reusable/modal";

export function StudentDiary() {
  const student = useSelector((state) => state.StudentInfo.studentinfo);
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const userid = student ? student.user_name : "";
  const class_id = student ? student.class:"" ;
  // Set minDate to tomorrow and maxDate to the last day of the current month
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    setMinDate(tomorrow.toISOString().split("T")[0]);
    setMaxDate(endOfMonth.toISOString().split("T")[0]);
  }, []);

  const validateDate = (date) => {
    const day = new Date(date).getDate();
    return day <= 31;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || !reason || !firstDate || !lastDate) {
      alert("All fields are required!");
      return;
    }
    if (!validateDate(firstDate) || !validateDate(lastDate)) {
      alert("Please select a valid date (up to the 31st)!");
      return;
    }
    if (new Date(firstDate) > new Date(lastDate)) {
      alert("The last day of absence must be after the first day of absence.");
      return;
    }
    console.log({ userid, phone, reason, firstDate, lastDate });
    
    submitForm();
  

   





    // Submit form logic here
  };
   
  async function submitForm(){
    try{
       
    const response = await axios.post("/student/leave_form", {
      userid,
      class_id,
      phone,
      reason,
      firstDate,
      lastDate,
    });
   
    alert(response.data);
     
    }
    catch(err){
     console.log(err);
    }
  }



  return (
    <Container className="p-5">
      <Form className="text-black" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter full name"
              value={
                student ? `${student.first_name} ${student.last_name}` : ""
              }
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              value={student ? student.class : ""}
              disabled
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridReason">
          <Form.Label>Reason For Leave</Form.Label>
          <Form.Control
            placeholder="Enter your reason for leave"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstDate">
            <Form.Label>First Day of Absence</Form.Label>
            <Form.Control
              type="date"
              value={firstDate}
              onChange={(e) => setFirstDate(e.target.value)}
              min={minDate}
              max={maxDate}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastDate">
            <Form.Label>Last Day of Absence</Form.Label>
            <Form.Control
              type="date"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
              min={firstDate}
              max={maxDate}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

