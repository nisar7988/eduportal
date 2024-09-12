import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavBar from "./NavBar";
import { TeacherSideBar } from "./sidebar";
export const TeacherHomePage = () => {
  const navigate = useNavigate();
  const isValid = useSelector((state) => state.LogIn.isValid);
  useEffect(() => {
    if (!isValid) {
      navigate("/login");
    }
  });
  return (
    <>
      <TeacherNavBar  />
      <TeacherSideBar />
    
    </>
  );
};
