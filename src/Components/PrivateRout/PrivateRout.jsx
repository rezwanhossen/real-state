import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRout = ({ children }) => {
  const { user, lodding } = useAuth();
  const location = useLocation();
  if (lodding) {
    return (
      <div className=" flex justify-center">
        <span className="loading loading-spinner text-error "></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRout;
