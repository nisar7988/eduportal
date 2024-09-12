import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row ,Col} from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const TimeTable = () => {
  const [timetableitems, settimetableitems] = useState([]);

   useEffect(()=>{
      getTimeTable();
   },[])

  //function to fetch timetable for teacher 
  async function getTimeTable(){
    try{
      const response = await axios.get("/teacher/getTimeTable");
      console.log(response.data);
      settimetableitems(response.data)
      
    }
    catch(err){
      console.log(err);
    }
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
console.log(timetableitems);
  return (
    <>
      <Container className="text-black">
        <Row>
          <Col md="10"></Col>
          <Col>Date : {currentDate}</Col>
        </Row>
        <Table style={{ color: "black", fontSize: "smaller" }} className="my-4">
          <thead>
            <tr>
              <th></th>
              <th>Lecture01</th>
              <th>Lecture02</th>
              <th>Lecture03</th>
              <th>Lecture04</th>
              <th>Lecture05</th>
              <th>Lecture06</th>
              <th>Lecture07</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Class</th>
              <th>08:30-09:15</th>
              <th>09:15-10:00</th>
              <th>10:00-10:45</th>
              <th>10:45-11:30</th>
              <th>11:30-12:15</th>
              {/* <th>12:15-01:00</th> */}
              <th>01:00-01:45</th>
              <th>01:45-02:30</th>
            </tr>
          </thead>
          <tbody>
            {timetableitems.map((e, index) => {
              console.log(index);
              console.log(e);
              return (
                <>
                  <tr>
                    <td>{e.class_id}</td>
                    <td>{e.Lecture01}</td>
                    <td>{e.Lecture02}</td>
                    <td>{e.Lecture03}</td>
                    <td>{e.Lecture04}</td>
                    <td>{e.Lecture05}</td>
                    {/* <td>break</td> */}

                    <td>{e.Lecture06}</td>
                    <td>{e.Lecture07}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
