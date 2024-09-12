import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

export const StudentAttendence = () => {
  const StudentData = useSelector((state) => state.StudentInfo.studentinfo);
  const [StudentAttData, setStudentAttData] = useState([]);
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);
  const [total, settotaldays] = useState(0);
  const date = new Date();
  const day = date.getDate();
  let month = date.getMonth() + 1; // Corrected the month calculation
  const year = date.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month_name = months[month - 1]; // Adjusted the month index
  if (month < 10) {
    month = `0${month}`;
  }

  const today = `${day}-${month}-${year}`;

  useEffect(() => {
    getStudentAttendence();
  }, []);

  useEffect(() => {
    if (StudentAttData.length > 0) {
      calculateAttendance();
    }
  }, [StudentAttData]);

  async function getStudentAttendence() {
    try {
      const response = await axios.get("/student/attendence", {
        params: {
          user_name: StudentData.user_name,
          password: StudentData.password,
        },
      });
      console.log(response.data)
      setStudentAttData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  console.log("attendence data is:",StudentAttData)
  function calculateAttendance() {
    let presentCount = 0;
    let absentCount = 0;

    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    daysInMonth.forEach((e) => {
      const dayKey = `Day${e < 10 ? `${e}` : e}`;
      const status = StudentAttData[0]?.[dayKey];
      if (e <= day) {
        if (status === 1) {
          presentCount++;
        } else if (status === 0) {
          absentCount++;
        }
      }
    });
    
    setPresent(presentCount);
    setAbsent(absentCount);
    let totaldays = presentCount + absentCount;
    settotaldays(totaldays);
  }

  function getstatusforDay(e) {
    const dayKey = `Day${e < 10 ? `${e}` : e}`;
    const status = StudentAttData[0]?.[dayKey];
    if (e <= day) {
      if (status === null) {
        return { label: "H", color: "orange" };
      } else if (status === 1) {
        return { label: "P", color: "green" };
      } else if (status === 0) {
        return { label: "A", color: "red" };
      } else {
        return { label: "", color: "" };
      }
    } else {
      return { label: "", color: "" };
    }
  }

  return (
    <>
      <Container className="text-black mt-3">
        <Row>
          {/* Student ID */}
          <Col md="10">
            <h4>
              Welcome{" "}
              {StudentAttData.length > 0 ? StudentAttData[0].student_id : ""}
            </h4>
          </Col>
          <Col>Date: {today}</Col> {/* Display the current date */}
        </Row>
        <Row>
          <h1>Attendance of {month_name}</h1>
        </Row>
        <Row>
          <Col md="7">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((e, index) => {
              const status = getstatusforDay(e);
              return (
                <div
                  key={index}
                  style={{
                    height: "4rem",
                    width: "4rem",
                    display: "inline-block",
                    margin: "0.2rem",
                    border: "1px solid black",
                    borderRadius: "10%",
                    position: "relative",
                    paddingTop: "1.8rem",
                    paddingLeft: "1rem",
                  }}
                >
                  {e}
                  <div
                    style={{
                      position: "absolute",
                      top: "0.2rem",
                      height: "2rem",
                      width: "2rem",
                      borderRadius: "0.5rem",
                      left: "1.8rem",
                      textAlign: "center",
                      backgroundColor: status.color,
                    }}
                    className="text-white"
                  >
                    {status.label}
                  </div>
                </div>
              );
            })}
          </Col>
          <Col style={{ marginLeft: "2rem" }}>
            <table style={{ fontSize: "1.5rem" }}>
              <tr>
                <th>Overall attendance:</th>
                <td>{((present / total) * 100).toFixed(2)}%</td>{" "}
                {/* Display the calculated attendance percentage */}
              </tr>
              <tr>
                <th>Total days:</th>
                <td>{total}</td>
              </tr>
              <tr>
                <th>Present:</th>
                <td>{present}</td>
              </tr>
              <tr>
                <th>Absent:</th>
                <td>{absent}</td>
              </tr>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// import Table from "react-bootstrap/Table";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { Container, Row , Col} from "react-bootstrap";
// import { useRef } from "react";
// import { colors } from "@mui/material";

// export const StudentAttendence = () => {
//   const StudentData = useSelector((state) => state.StudentInfo.studentinfo);
//   const [StudentAttData , setStudentAttData] = useState([]);
//   const [status , setstatus] = useState(null);
//   const date = new Date();
//   const day = date.getDate();
//   let month = date.getMonth();
//   const year = date.getFullYear();
//   const elementref = useRef([]);
//   const [present , setpresent ] = useState(0);
//   const [absent , setabesent ] = useState(0);

//  const months = [
//    "January",
//    "February",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "October",
//    "November",
//    "December",
//  ];
//  const month_name = months[month]
//   if(month<10){
//     month = `0${month}`;
//   }
//   console.log(`${day}-${month}-${year}`);
//   const today = `${day}-${month}-${year}`;

//  function getstatusforDay(e){
//   const dayKey = `Day${e < 10 ? `0${e}` : e}`;
//   // console.log(dayKey); // days from table
//   const status = StudentAttData[0]?.[dayKey];
//   if(e<=day){
//   if(status===null){
//     return { label:'H', color:'orange'};
//   }
//   else if (status === 1) {
//     // setpresent(present+1);
//     return {label:'P', color:'green'};
//   }
//   else if (status === 0){

//     return {label:'A',color :'red'};
//   }
//   else {
//     return {label : '', color: ''};
//   }
// }
// else{
//   return {label : '', color:''}
// }
//  };

//   useEffect(() => {
//     getStudentAttendence();
//   }, []);
//   const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

//   async function getStudentAttendence() {
//     try {
//       const response = await axios.get("/student/attendence", {
//         params: {
//           user_name: StudentData.user_name,
//           password: StudentData.password,
//         },
//       });
//       console.log(response.data);
//       setStudentAttData(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <>
//       <Container className="text-black mt-3">
//         <Row>
//           {/* student_id */}
//           <Col md="10">
//             <h4>
//               welcom{" "}
//               {StudentAttData.length > 0 ? StudentAttData[0].student_id : ""}
//             </h4>
//           </Col>
//           <Col>Date : {today}</Col>
//         </Row>
//         <Row>
//           <h1>Attendence of {month_name}</h1>
//         </Row>
//         <Row>
//           <Col md="7" >
//           {
//             daysInMonth.map((e,index)=>{
//               const status = getstatusforDay(e);
//                return (
//                  <div
//                    // ref={(el) => (elementref.current[index] = el)}

//                    style={{
//                      height: "4rem",
//                      width: "4rem",
//                      display: "inline-block",
//                      margin: "0.2rem",
//                      border: "1px solid black",
//                      borderRadius: "10%",
//                      position: "relative",
//                      paddingTop: "1.8rem",
//                      paddingLeft: "1rem",
//                    }}
//                  >
//                    {e}
//                    <div
//                      style={{
//                        position: "absolute",
//                        top: "0.2rem",
//                        height: "2rem",
//                        width: "2rem",
//                       //  borderRadius: "1rem",
//                       borderRadius:'0.5rem',
//                        left: "1.8rem",
//                        textAlign: "center",
//                        backgroundColor:status.color,
//                      }}
//                      className="text-white"
//                    >
//                      {status.label}
//                    </div>
//                  </div>
//                );
//             })
//           }
//           </Col>
//           <Col style={{marginLeft:'2rem'}}>

//                <table style={{fontSize:'1.5rem'}}>
//                 <tr>
//                   <th>overall attendence: </th>
//                   <td>85%</td>
//                 </tr>
//                   <tr>
//                     <th>
//                        total days:
//                     </th>
//                     <td>
//                        30
//                     </td>
//                   </tr>
//                   <tr>
//                     <th>
//                       present:
//                     </th>
//                     <td>
//                       {present}
//                     </td>
//                   </tr>
//                   <tr>
//                     <th>absent</th>
//                     <td>11</td>
//                   </tr>
//                </table>

//           </Col>
//         </Row>

//       </Container>
//     </>
//   );
// };
