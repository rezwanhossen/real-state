import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
const SocalLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  return (
    <div>
      <h5 className=" divider text-lg font-bold">Continue with</h5>
      <div className=" flex gap-3 justify-center">
        <button
          onClick={() => googleLogin()}
          className="btn btn-outline btn-accent text-2xl "
        >
          <FaGoogle />
        </button>
        <button
          onClick={() => githubLogin()}
          className="btn text-2xl btn-outline btn-accent"
        >
          <FaGithub />
        </button>
        <button className="btn text-2xl btn-outline btn-accent">
          <FaFacebookF />
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
