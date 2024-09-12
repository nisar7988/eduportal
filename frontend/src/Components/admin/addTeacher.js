import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export function AddTeacher() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    aadharNumber: "",
    email: "",
    primaryPhone: "",
    assignedClass: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    designation: "",
    assignedSubject: "",
    status: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    bloodGroup: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value) error = "This field is required";
        break;
      case "aadharNumber":
        if (!/^\d{12}$/.test(value)) error = "Aadhar number must be 12 digits";
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) error = "Email is not valid";
        break;
      case "primaryPhone":
        if (!/^\d{10}$/.test(value)) error = "Phone number must be 10 digits";
        break;
      case "assignedClass":
        if (!value) error = "This field is required";
        break;
      case "dateOfBirth":
        if (!value) error = "This field is required";
        break;
      case "gender":
        if (!value) error = "Please select a gender";
        break;
      case "address":
        if (!value) error = "This field is required";
        break;
      case "designation":
        if (!value) error = "This field is required";
        break;
      case "assignedSubject":
        if (!value) error = "This field is required";
        break;
      case "status":
        if (!value) error = "This field is required";
        break;
      case "emergencyContactName":
        if (!value) error = "This field is required";
        break;
      case "emergencyContactNumber":
        if (!/^\d{10}$/.test(value))
          error = "Emergency contact must be 10 digits";
        break;
      case "bloodGroup":
        if (!value) error = "This field is required";
        break;
      case "file":
        if (!value) error = "File is required";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the field and set errors
    const error = validate(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate all fields before submission
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) formErrors[key] = error;
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Submit the form
      console.log("Form data submitted:", formData);
    
      // Reset form if needed
     sendTeacherData(formData);
    // navigate panding?
    }
  };
    async function sendTeacherData (formData) {
        try{
          const response = await axios.post("/teacher/addteacher", formData);
          console.log(response.data);
          alert(response.data.message);

        }
        catch(err){

           console.error('Error adding teacher:', err);
        }
      }
  return (
    <Container className="m-3">
      <Form className="text-black" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAadhar">
            <Form.Label>Aadhar number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Aadhar number"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              isInvalid={!!errors.aadharNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.aadharNumber}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone1">
            <Form.Label>Phone (Primary)</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter primary phone number"
              name="primaryPhone"
              value={formData.primaryPhone}
              onChange={handleChange}
              isInvalid={!!errors.primaryPhone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.primaryPhone}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridClass">
            <Form.Label>Assigned Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter class"
              name="assignedClass"
              value={formData.assignedClass}
              onChange={handleChange}
              isInvalid={!!errors.assignedClass}
            />
            <Form.Control.Feedback type="invalid">
              {errors.assignedClass}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              isInvalid={!!errors.dateOfBirth}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfBirth}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              isInvalid={!!errors.gender}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address"
            value={formData.address}
            onChange={handleChange}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address}
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              isInvalid={!!errors.designation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.designation}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Assigned subject</Form.Label>
            <Form.Control
              name="assignedSubject"
              value={formData.assignedSubject}
              onChange={handleChange}
              isInvalid={!!errors.assignedSubject}
            />
            <Form.Control.Feedback type="invalid">
              {errors.assignedSubject}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Status</Form.Label>
            <Form.Control
              name="status"
              value={formData.status}
              onChange={handleChange}
              isInvalid={!!errors.status}
            />
            <Form.Control.Feedback type="invalid">
              {errors.status}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmergencyContactName">
            <Form.Label>Emergency Contact Name</Form.Label>
            <Form.Control
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              isInvalid={!!errors.emergencyContactName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.emergencyContactName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmergencyContactNumber">
            <Form.Label>Emergency Contact Number</Form.Label>
            <Form.Control
              type="tel"
              name="emergencyContactNumber"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              isInvalid={!!errors.emergencyContactNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.emergencyContactNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBloodGroup">
            <Form.Label>Blood Group</Form.Label>
            <Form.Control
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              isInvalid={!!errors.bloodGroup}
            />
            <Form.Control.Feedback type="invalid">
              {errors.bloodGroup}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFile">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  file: e.target.files[0],
                }));

                // Validate file field
                const error = validate("file", e.target.files[0]);
                setErrors((prev) => ({
                  ...prev,
                  file: error,
                }));
              }}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid">
              {errors.file}
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
