import Nav from "react-bootstrap/Nav";
import { Col, Container, Row } from "react-bootstrap";
import { PiStudentFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
export const AdminSideBar = () => {
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
              <Nav defaultActiveKey="/admin/home" className="flex-column my-3">
                <Nav.Link
                  as={Link}
                  to="/admin/"
                  eventKey="/admin/home"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    <IoIosHome
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.2rem" }}
                    />
                    Home
                  </h5>
                </Nav.Link>
                {/* <Nav.Link
                  as={Link}
                  to="/admin/editprofile"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    <FaUserEdit className="mx-2" />
                    Edit Profile
                  </h5>
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/admin/addstudents"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    <PiStudentFill
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.2rem" }}
                    />
                    Add Student
                  </h5>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/admin/addteacher"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    <FaChalkboardTeacher
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.2rem" }}
                    />
                    Add Teacher
                  </h5>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/admin/sendmail"
                  eventKey="link-2"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    <MdEmail
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.2rem" }}
                    />
                    Send Mail
                  </h5>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/admin/uploadimage"
                  eventKey="link-2"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    <MdEmail
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.2rem" }}
                    />
                    Upload Profile Image
                  </h5>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-2"
                  as={Link}
                  to="/admin/leftstudents"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    <FaUserCheck
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.2rem" }}
                    />
                    View Left Students
                  </h5>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-2"
                  as={Link}
                  to="/admin/calender"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    {/* <FaUserCheck className="mx-2" /> */}
                    <IoCalendarNumber
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.2rem" }}
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
                      className="mx-2"
                      style={{ position: "relative", bottom: "0.1rem" }}
                    />
                    LogOut
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
