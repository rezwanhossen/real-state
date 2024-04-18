import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="w-2/4 mx-auto border rounded space-y-3 p-5">
        <img className="" src={user?.photoURL || "Not Defind"} alt="" />
        <h1 className=" text-3xl"> {user?.displayName}</h1>
        <p>
          <b>Email : </b> {user?.email || "not exist"}{" "}
        </p>
      </div>
    </div>
  );
};

export default Profile;
