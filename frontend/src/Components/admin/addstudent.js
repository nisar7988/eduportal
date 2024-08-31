import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";

export function AddStudentByAdmin() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    aadhar: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone1: "",
    phone2: "",
    class: "",
    dateOfBirth: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    nationality: "",
    religion: "",
    bloodGroup: "",
    gender: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate();
  };

  const validate = () => {
    let errors = {};

    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.aadhar) errors.aadhar = "Aadhar number is required";
    if (!formData.fatherName) errors.fatherName = "Father's Name is required";
    if (!formData.motherName) errors.motherName = "Mother's Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone1) {
      errors.phone1 = "Primary Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone1)) {
      errors.phone1 = "Phone number must be 10 digits";
    }
    if (formData.phone2 && !/^\d{10}$/.test(formData.phone2)) {
      errors.phone2 = "Phone number must be 10 digits";
    }
    if (!formData.class) errors.class = "Class is required";
    if (!formData.dateOfBirth) errors.dateOfBirth = "Date of Birth is required";
    if (!formData.address1) errors.address1 = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.zip) {
      errors.zip = "Zip Code is required";
    } else if (!/^\d{6}$/.test(formData.zip)) {
      errors.zip = "Zip Code must be 6 digits";
    }
    if (!formData.nationality) errors.nationality = "Nationality is required";
    if (!formData.religion) errors.religion = "Religion is required";
    if (!formData.bloodGroup) errors.bloodGroup = "Blood Group is required";
    if (!formData.gender) errors.gender = "Gender is required"; // Add gender validation
    if (!formData.file) errors.file = "File is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      alert("successfully submitted");
      console.log("Form submitted successfully!", formData);
      try {
        const response = await axios.post("/student/addstudent", formData);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              placeholder="Enter aadhar number"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              isInvalid={!!errors.aadhar}
            />
            <Form.Control.Feedback type="invalid">
              {errors.aadhar}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFatherName">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter father's name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              isInvalid={!!errors.fatherName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fatherName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMotherName">
            <Form.Label>Mother's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mother's name"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              isInvalid={!!errors.motherName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.motherName}
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
              name="phone1"
              value={formData.phone1}
              onChange={handleChange}
              isInvalid={!!errors.phone1}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone1}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone2">
            <Form.Label>Phone (Secondary)</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter secondary phone number"
              name="phone2"
              value={formData.phone2}
              onChange={handleChange}
              isInvalid={!!errors.phone2}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone2}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridClass">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              isInvalid={!!errors.class}
            />
            <Form.Control.Feedback type="invalid">
              {errors.class}
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
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            isInvalid={!!errors.address1}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address1}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              value={formData.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            />
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            {/* <Form.Select
              defaultValue="Choose..."
              name="state"
              value={formData.state}
              onChange={handleChange}
              isInvalid={!!errors.state}
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select> */}
            <Form.Control
              name="state"
              value={formData.state}
              onChange={handleChange}
              isInvalid={!!errors.state}
            />
            <Form.Control.Feedback type="invalid">
              {errors.state}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              isInvalid={!!errors.zip}
            />
            <Form.Control.Feedback type="invalid">
              {errors.zip}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              isInvalid={!!errors.nationality}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nationality}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridReligion">
            <Form.Label>Religion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              isInvalid={!!errors.religion}
            />
            <Form.Control.Feedback type="invalid">
              {errors.religion}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBloodGroup">
            <Form.Label>Blood Group</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blood group"
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

        <Form.Group className="position-relative mb-3">
          <Form.Label>File</Form.Label>
          <Form.Control
            type="file"
            required
            name="file"
            onChange={(e) =>
              setFormData({ ...formData, file: e.target.files[0] })
            }
            isInvalid={!!errors.file}
          />
          <Form.Control.Feedback type="invalid">
            {errors.file}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
