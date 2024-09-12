import axios from "axios";
import { useEffect, useState } from "react";
import { Container,Row ,Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

export const ViewClasswiseAttendence = () =>{
// export { Container } 
const [students, setstudents] = useState([])

  useEffect(()=>{
     viewLeftStudents();
  },[])


 async function viewLeftStudents(){
  try{
   const response = await axios('/student/leftstudents');
   console.log(response.data)
   setstudents(response.data)

  }
  catch(err){
    console.log(err);
  }


 } 

 const columns = [
   {
     dataField: "first_name",
     text: "Name",
    },
    {
      dataField: "father_name",
      text: "Father name",
    },
    {
      dataField: "email",
      text: "Email",
    },

   {
     dataField: "phone1",
     text: "Ph number",
   },
   {
     dataField: "class",
     text: "Class",
   },

   {
     dataField: "address1",
     text: "Address",
   },
   {
    dataField: "created_at",
    text:'Date of Admission'
   },
   {
    dataField: "Leave_date",
    text:'Date of exit'
   }

 ];
  

 return (
   <>
     {
       <Container className="my-4">
         <Row>
           <BootstrapTable
             keyField="user_name"
             data={students}
             columns={columns}
           />
         </Row>
       </Container>
     }
   </>
 );
};




