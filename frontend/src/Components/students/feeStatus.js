import BootstrapTable from "react-bootstrap-table-next"
import { useSelector } from "react-redux"
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import PrintPage from "../reusable/printPage";

export const FeeStatus = ()=>{
    
   const studentinfo = useSelector(status=>status.StudentInfo.studentinfo)
   console.log(studentinfo)
   const navigate = useNavigate();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // let ac_day = day<0?0${}:{day}
    let currentDate = `${day}-${month}-${year}`;


   return (
     <>
       <Container className="my-5">
         <Row>
           <Table striped bordered hover>
             <tbody className="text-center">
               <tr>
                 <th>Student Name</th>
                 <td>{studentinfo ? studentinfo.first_name : ""}</td>
               </tr>
               <tr>
                 <th>User Name</th>
                 <td>{studentinfo ? studentinfo.user_name : ""}</td>
               </tr>
               <tr>
                 <th>Class</th>
                 <td>{studentinfo ? studentinfo.class : ""}</td>
               </tr>
               <tr>
                 <th>Date of Receipt</th>
                 <td>{currentDate}</td>
               </tr>
               <tr>
                 <th>Amount Payable</th>
                 <td>7000.00</td>
               </tr>
               <tr>
                 <th>Paid Amount</th>
                 <td>{studentinfo ? studentinfo.fee : ""}</td>
               </tr>
               <tr>
                 <th>Balance</th>
                 <td>{studentinfo ? 7000.0 - studentinfo.fee : ""}.00</td>
               </tr>
             </tbody>
           </Table>
         </Row>
         <Row>
           <Col md="9"></Col>
           <Col>
             <Button
               className="button"
               onClick={() => navigate("/student/payment")}
             >
               Make Payment
             </Button>{" "}
           </Col>
         </Row>
       </Container>
     </>
   );
 
 
 

}