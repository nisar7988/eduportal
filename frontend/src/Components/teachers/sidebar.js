import Nav from "react-bootstrap/Nav";
import { Col, Container, Row } from "react-bootstrap";
import { PiStudentFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { Link,Outlet } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";
export const TeacherSideBar = () => {
  return (
    <>
      <Container
        className="bg-black text-white "
        style={{ position: "relative" }}
        fluid
      >
        <Row>
          <Col md={3}>
            <Container>
              <Nav
                defaultActiveKey="/teacher/home"
                className="flex-column my-3"
              >
                <Nav.Link
                  as={Link}
                  to="/teacher/"
                  eventKey="/teacher/home"
                  className="text-white"
                >
                  <h5 className="text">
                    {" "}
                    <IoIosHome
                      style={{ position: "relative", bottom: "0.2rem" }}
                      className="mx-2"
                    />
                    Home
                  </h5>
                </Nav.Link>
                {/* <Nav.Link
                  as={Link}
                  to="/teacher/editprofile"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    <FaUserEdit
                      style={{ position: "relative", bottom: "0.2rem" }}
                      className="mx-2"
                    />
                    Edit Profile
                  </h5>
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/teacher/addstudents"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    <PiStudentFill
                      style={{ position: "relative", bottom: "0.2rem" }}
                      className="mx-2"
                    />
                    Add Student
                  </h5>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/teacher/sendmail"
                  eventKey="link-2"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    <MdEmail
                      style={{ position: "relative", bottom: "0.1rem" }}
                      className="mx-2"
                    />
                    Send Mail
                  </h5>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-2"
                  as={Link}
                  to="/teacher/attendence"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    <FaUserCheck
                      style={{ position: "relative", bottom: "0.2rem" }}
                      className="mx-2"
                    />
                    Attendance
                  </h5>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-2"
                  as={Link}
                  to="/teacher/uploadimage"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    <FaUserCheck
                      style={{ position: "relative", bottom: "0.2rem" }}
                      className="mx-2"
                    />
                    Upload Profile Image
                  </h5>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-2"
                  as={Link}
                  to="/teacher/calender"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    {/* <FaUserCheck className="mx-2" /> */}
                    <IoCalendarNumber
                      style={{ position: "relative", bottom: "0.2rem" }}
                      className="mx-2"
                    />
                    Calendar
                  </h5>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/login"
                  eventKey="disabled"
                  className="text-white"
                  style={{ position: "absolute", bottom: "0" }}
                >
                  <h5>
                    {" "}
                    <LuLogOut
                      style={{ position: "relative", bottom: "0.1rem" }}
                      className="mx-2"
                    />
                    Logout
                  </h5>
                </Nav.Link>
              </Nav>
            </Container>
          </Col>

          <Col
            className="px-3"
            style={{
              backgroundColor: "white",
              height: "31.9rem",
              overflow: "scroll",
            }}
          >
            {" "}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
