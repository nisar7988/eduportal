import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";


export const Notes = () => {
  // const [error, seterror] = useState('')
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
      // alert(err);
      // seterror('')
      console.log(err.message);
     }
  }
console.log(data);

  return (
    <>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Class</th>
          <th>Phone</th>
          <th>Reason</th>
          <th>First Day of absence</th>
          <th>Last Day of absence</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((item,index)=>{
              return (
                <tr>
                  <td>{item.user_name}</td>
                  <td>{item.class_id}</td>
                  <td>{item.phone}</td>
                  <td>{item.Reason}</td>
                  <td>{item.first_Date}</td>
                  <td>{item.last_Date}</td>
                </tr>
              );
            })
        
         
        }
      
      </tbody>
    </Table>
  

export default BasicExample;
    </>
  );
};
