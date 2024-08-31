
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../reusable/card";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
export const ViewStudentsbyAdmin = () => {
  // export { Container }
  const admininfo = useSelector((state) => state.AdminInfo.admininfo);
  const navigate = useNavigate();
  const classes = [
    {
      className: "6th",
      teacherAssigned: "Renu",
      path: "/admin/studentsix",
    },
    {
      className: "7th",
      teacherAssigned: "Neha",
      path: "/admin/studentseven",
    },
    {
      className: "8th",
      teacherAssigned: "Pooja",
      path: "/admin/studenteight",
    },
    {
      className: "9th",
      teacherAssigned: "Vikram",
      path: "/admin/studentnine",
    },
    {
      className: "10th",
      teacherAssigned: "Amit Kumar",
      path: "/admin/studentten",
    },
  ];

  function HandleCard(path) {
    navigate(path);
  }

  return (
    <>
      {
        <Container style={{color: "rgba(3,1,66,255)" }}>
          <Row className="my-2">
            <h3> Welcome {admininfo.name}</h3>
          </Row>
          <Row>
            {classes.map((item) => {
              return (
                <Col
                  md={4}
                  className="mt-5 mb-5"
                  style={{ color: "rgba(3,1,66,255)" }}
                  key={item.title}
                  onClick={() => HandleCard(item.path)}
                >
                  <Cards
                    title={item.teacherAssigned}
                    icon={item.className}
                    body={item.body}
                  />
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




