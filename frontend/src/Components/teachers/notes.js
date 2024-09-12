import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector} from "react-redux";
import BootstrapTable from 'react-bootstrap-table-next';

export const Notes = () => {
  // const [error, seterror] = useState('')
  const Data1 = useSelector((state) => state.TeacherInfo.info);

   const class_id = Data1 ? Data1.assigned_classes : "";
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    //    <td>{item.user_name}</td>
    //               <td>{item.class_id}</td>
    //               <td>{item.phone}</td>
    //               <td>{item.Reason}</td>
    //               <td>{item.first_Date}</td>
    //               <td>{item.last_Date}</td>
    const Value = [
      {
        dataField: "class_id",
        text: "Class",
      },
      {
         dataField : "user_name",
         text:"Studend Id"
      },
      {
        dataField: "phone",
        text: "Phone",
      },
      {
        dataField: "Reason",
        text: "Reason",
      },
      {
        dataField: "first_Date",
        text: "First Day of Absence",
      },
      {
        dataField: "last_Date",
        text: "Last Day of Absence",
      },
    
    ];

  const [data , setdata ] = useState([]);
  useEffect(()=>{
    getLeaveFormData();
  },[])
  async function getLeaveFormData(){
     try{
       const response = await axios.get("/teacher/StudentLeaveData");
       console.log(response.data);
       setdata(response.data)
     }
     catch(err){
 
      console.log(err.message);
     }
  }
console.log(data);

  return (
    <>
    <Container className="icon py-2">
      <Row>
        <Col md="10">
          <p>
          
          </p>
        </Col>
        <Col>
          <b>Date</b> : {currentDate}
        </Col>
      </Row>
    <Row className='mt-3'>

   <BootstrapTable keyField='user_name' data={data} columns={Value} />
    </Row>






</Container>
export default BasicExample;
    </>
  );
};
