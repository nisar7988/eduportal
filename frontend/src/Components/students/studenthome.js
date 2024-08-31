import { useSelector} from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StudentSideBar } from "./studentSidebar";
import StudentNavBar from "./studentNavBar";
export const StudentHomePage = () =>{
     const navigate = useNavigate();
     const isValid = useSelector((state) => state.LogIn.isValid);
     useEffect(() => {
       if (!isValid) {
         navigate("/login");
       }
     });
 

    return (
        <>
           <StudentNavBar/>
           <StudentSideBar />
        </>
    )
}