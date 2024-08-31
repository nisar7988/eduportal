import { Container,Row ,Col } from "react-bootstrap";
import Cards from "../reusable/card";
import { Outlet,useNavigate } from "react-router-dom";
export const ViewClasswiseAttendence = () =>{
// export { Container } 
   const navigate = useNavigate();
   const classes = [
     {
       className: "6th",
       teacherAssigned: "Renu",
       path: "/admin/viewattendence_six",
     },
     {
       className: "7th",
       teacherAssigned: "Neha",
       path: "/admin/viewattendence_seven",
     },
     {
       className: "8th",
       teacherAssigned: "Renu",
       path: "/admin/viewattendence_eight",
     },
     {
       className: "9th",
       teacherAssigned: "Vikram",
       path: "/admin/viewattendence_nine",
     },
     {
       className: "10th",
       teacherAssigned: "Amit Kumar",
       path: "/admin/viewattendence_ten",
     },
   ];


    function HandleCard(path) {
      navigate(path);
    }

 return (
    <>
      {
        <Container>
          <Row>
            {classes.map((item) => {
              return (
                <Col
                  md={4}
                  className="mt-5 mb-5"
                  key={item.title}
                  onClick={() => HandleCard(item.path)}
                >
                  <Cards title={item.teacherAssigned} icon={item.className} body={item.body} />
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




