import { AdminBodyContent} from "./bodycontent";
import { useSelector } from "react-redux";
export const HomeAdmin = () => {
  const admininfo = useSelector((state) => state.AdminInfo.admininfo);
  return (
    <>
      

      <h3 style={{ color: "rgba(3,1,66,255)" }}> Welcome {admininfo.name}</h3>

      <AdminBodyContent />
    </>
  );
};
