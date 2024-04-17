import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const SocalLogin = () => {
  const { googleLogin, githubLogin, facbookLogin } = useAuth();
  const naviget = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";
  const handelSocalLoig = (socalprov) => {
    socalprov().then((restlt) => {
      if (restlt.user) {
        naviget(from);
      }
    });
  };
  return (
    <div>
      <h5 className=" divider text-lg font-bold">Continue with</h5>
      <div className=" flex gap-3 justify-center">
        <button
          onClick={() => handelSocalLoig(googleLogin)}
          className="btn btn-outline btn-accent text-2xl "
        >
          <FaGoogle />
        </button>
        <button
          onClick={() => handelSocalLoig(githubLogin)}
          className="btn text-2xl btn-outline btn-accent"
        >
          <FaGithub />
        </button>
        <button
          onClick={() => handelSocalLoig(facbookLogin)}
          className="btn text-2xl btn-outline btn-accent"
        >
          <IoLogoFacebook></IoLogoFacebook>
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
