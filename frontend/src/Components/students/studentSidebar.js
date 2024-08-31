import Nav from "react-bootstrap/Nav";
import { Col, Container,  Row } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoIosHome } from "react-icons/io";
import { modal } from "../reusable/modal";
 import { IoCalendarNumber } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
export const StudentSideBar = () => {
  // function handleLogout(){
  //   // <modal />
  //   <modal />;
  // }


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
              <Nav defaultActiveKey="//home" className="flex-column my-3">
                <Nav.Link
                  as={Link}
                  to="/student/"
                  eventKey="/student/home"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    <IoIosHome className="mx-2" />
                    Home
                  </h5>
                </Nav.Link>

                <Nav.Link eventKey="link-2" className="text-white">
                  {" "}
                  <h5>
                    {" "}
                    <IoSettings className="mx-2" />
                    setting
                  </h5>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-2"
                  as={Link}
                  to="/student/attendence"
                  className="text-white"
                >
                  {" "}
                  <h5>
                    {" "}
                    <FaUserCheck className="mx-2" />
                    Attendence
                  </h5>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/student/calender"
                  eventKey="disabled"
                  className="text-white"
                >
                  <h5>
                    {" "}
                    {/* <MdDarkMode className="mx-2" /> */}
                    <IoCalendarNumber className="mx-2" />
                    Calender
                  </h5>
                </Nav.Link>
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
                <Nav.Link
                  eventKey="disabled"
                  as={Link}
                  to={"/login"}
                  className="text-white"
                  style={{ position: "absolute", bottom: "0" }}
                  // onClick={()=>handleLogout()}
                >
                  <h5>
                    {" "}
                    <LuLogOut className="mx-2" />
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
