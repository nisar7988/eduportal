// import { LogInPage } from "./LogInPage"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
export const HomePage = () =>{
    const navigate = useNavigate();
    
   const isValid = useSelector((state) => state.LogIn.isValid);
    useEffect(()=>{
        if (!isValid) {
            navigate("/login");
        }
    })

   
    return (
        
        <>
      
        
           {/* <LogInPage /> */}
        </>
    )
}