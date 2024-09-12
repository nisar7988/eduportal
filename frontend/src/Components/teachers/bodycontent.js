import Cards from "../reusable/card";
import { PiStudentFill } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { IoTimeSharp } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
export const TeacherBodyContent = () => {
  const navigate = useNavigate();
  const CardData = [
    {
      icon: <FaUser />,
      title: "View Profile",
      body: "want to edit profile.",
      path: "/teacher/viewprofile",
    },
    {
      icon: <MdGroups  />,
      title: "View Students",
      body: "want to edit students",
      path: "/teacher/viewstudents",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Leaves",
      body: "see today",
      path: "/teacher/notes",
    },
    {
      icon: <IoTimeSharp />,
      title: "Timetable",
      body: "view or edit timetable",
      path: "/teacher/timetable",
    },
  ];

  function HandleCard(path) {
    navigate(path);
    
  }

  return (
    <>
      {
        <Container >
          <Row>
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
      <Outlet/>
    </>
  );
};
