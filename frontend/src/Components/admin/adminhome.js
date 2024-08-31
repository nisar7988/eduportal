import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "./navbar";
import { AdminSideBar } from "./sidebar";
export const AdminHomePage = () => {
  const navigate = useNavigate();
  const isValid = useSelector((state) => state.LogIn.isValid);
  useEffect(() => {
    if (!isValid) {
      navigate("/login");
    }
  });
  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      
    </>
  );
};
