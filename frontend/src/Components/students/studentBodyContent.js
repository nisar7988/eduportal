import Cards from "../reusable/card";
import { PiStudentFill } from "react-icons/pi";
import { FaNoteSticky } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { IoTimeSharp } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
// import { FcLeave } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
export const StudentBodyContent = () => {
  const navigate = useNavigate();
  const CardData = [
    {
      icon: <FaUser />,
      title: "View Profile",
      body: "want to edit profile.",
      path: "/student/viewprofile",
    },
    {
      icon: <PiStudentFill />,
      title: "View Teachers",
      body: "want to edit students",
      path: "/student/viewteachers",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Apply For Leave",
      body: "see today",
      path: "/student/leave",
    },
    {
      icon: <IoTimeSharp />,
      title: "Timetable",
      body: "view or edit timetable",
      path: "/student/timetable",
    },
  ];

  function HandleCard(path) {
    navigate(path);
  }

  return (
    <>
      {
        <Container>
          <Row className="mb-5">
            {CardData.map((item) => {
              return (
                <Col
                  md={5}
                  className="mt-5 mb-5 forcards"
                  key={item.title}
                  onClick={() => HandleCard(item.path)}
                >
                  <Cards title={item.title} icon={item.icon} body={item.body} />
                </Col>
              );
            })}
          </Row>
        </Container>
      }
      <Outlet />
    </>
  );
};
