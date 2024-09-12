import axios from "axios";
import { useEffect, useState } from "react";
import { Container ,Row ,Col} from "react-bootstrap"
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";


export const Timetable = () =>{
 const class_id = useSelector((state) => state.StudentInfo.studentinfo.class);
 const [timetable , settimetable] = useState('');
 
 const [imagePath, setImagePath] = useState("");
 const [error, setError] = useState("");

  useEffect(()=>{
    getTimeForStudent();

  },[]);
  async function getTimeForStudent () {
      try {
        console.log(class_id);
        const response = await axios.get("/student/getTimeTable", {
          params: { class : class_id },
        });   
        console.log(response.data);
        settimetable(response.data[0])
      }
      catch(err){
        console.log(err);
      }

  }
console.log(timetable)
  
 const userId = '123';

useEffect(() => {
  const fetchImagePath = async ( ) => {
    try {
      const res = await axios.get(`/upload/getImageByStudentId/${userId}`);
      console.log(res.data)
      setImagePath(res.data.filePath); // assuming the API response has filePath
    } catch (err) {
      setError("Failed to fetch image");
    }
  };
  fetchImagePath();
}, []);







return (
  <>
    <Container style={{ height: "32rem" }}>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Lecture01</th>
              <th>Lecture02</th>
              <th>Lecture03</th>
              <th>Lecture04</th>
              <th>Lecture05</th>
              <th>Lunch Break</th>
              <th>Lecture06</th>
              <th>Lecture07</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>08:30-09:15</th>
              <th>09:15-10:00</th>
              <th>10:00-10:45</th>
              <th>10:45-11:30</th>
              <th>11:30-12:15</th>
              <th>12:15-01:00</th>
              <th>01:00-01:45</th>
              <th>01:45-02:30</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{timetable.Lecture01}</td>
              <td>{timetable.Lecture02}</td>
              <td>{timetable.Lecture03}</td>
              <td>{timetable.Lecture04}</td>
              <td>{timetable.Lecture05}</td>
              <td>Break</td>
              <td>{timetable.Lecture06}</td>
              <td>{timetable.Lecture07}</td>
            </tr>
          </tbody>
        </Table>
      </Row>

      <Row>
        {imagePath ? (
          <img
            src={`${imagePath}`} // Adjust the path as needed
            alt="Fetched from backend"
            style={{ width: "300px", marginTop: "10px" }}
          />
        ) : (
          <p>{error || "No image to display"}</p>
        )}
      </Row>
    </Container>
  </>
);

}