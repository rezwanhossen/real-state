import { useContext } from "react";
import { AuthContx } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContx);
  return all;
};

export default useAuth;
