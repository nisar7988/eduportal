import { Container,Row ,Col } from "react-bootstrap"
import Profile from "../reusable/profile"
import image1 from "../../Assets/mathteacher.jpg"
import image2 from "../../Assets/physicsteacher.jpg"
import image3 from "../../Assets/chemistryteacher.jpg"
import image4 from "../../Assets/bioteacher.jpeg"
import { useEffect, useState } from "react"
import axios from "axios"
export const ViewTeachers = ()=>{
  const [Data , setData]= useState([]);
  useEffect(()=>{
     async function getAllTeachers(){
       try{
          const result =await axios.get("/teacher/getTeachers");
          // console.log(result.data)
          setData(result.data)
       }


       catch(err){
        console.log(err)
       }
     }
     if(Data!==''){
       getAllTeachers();
     }

  },[])






  //  const teacherData = [
  //    { image: image1, name: "Renu", sub: "Mathmatics", contact: 9992367123 },
  //    { image: image2, name: "Rahul", sub: "Physics", contact: 9992367123 },
  //    { image: image3, name: "Divya", sub: "Chemistry", contact: 9992367123 },
  //    {
  //      image: image4,
  //      name: "Aasha",
  //      sub: "Biology",
  //      contact: 9992367123,
  //    },
  //  ];

    return(
        <>
          <Container className="p-5">
            <Row>
               {
                
                Data.map((item,index)=>{
                    return (
                      <Col key={index}>
                        <Profile
                          name={item.user_name}
                          sub={item.assigned_subjects}
                          contact={item.phone_number}
                        />
                        Profile
                      </Col>
                    );
                })
               } 
            </Row> 
          </Container>
        </>
    )
}