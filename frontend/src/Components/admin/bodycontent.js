import Cards from "../reusable/card";
import { PiStudentFill } from "react-icons/pi";
import { Col, Container, Row } from "react-bootstrap";
import { IoTimeSharp } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

export const AdminBodyContent = () => {
  const navigate = useNavigate();
  const CardData = [
    {
      icon: <FaUser />,
      title: "View Profile",
      body: "want to edit profile.",
      path: "/admin/viewprofile",
    },
    {
      icon: <PiStudentFill />,
      title: "View Students",
      body: "want to edit students",
      path: "/admin/viewstudents",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "View Teachers",
      body: "see today",
      path: "/admin/viewteachers",
    },
    {
      icon: <IoTimeSharp />,
      title: "Timetable",
      body: "view or edit timetable",
      path: "/admin/timetable",
    },
  ];

  function HandleCard(path) {
    navigate(path);
  }

  return (
    <>
      {
        <Container style={{ color: "rgba(3,1,66,255)" }}>
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
      <Outlet />
    </>
  );
};
