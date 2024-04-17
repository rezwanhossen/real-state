import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "../Firbase/Firbase.config";

export const AuthContx = createContext(null);
const googlepro = new GoogleAuthProvider();
const githubpro = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  console.log(user);
  //creat users
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };

  //GOOGLE LOGIN
  const googleLogin = () => {
    return signInWithPopup(auth, googlepro);
  };
  //GOOGLE LOGIN
  const githubLogin = () => {
    return signInWithPopup(auth, githubpro);
  };

  //objerver
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
      //   else {
      //     // User is signed out
      //     // ...
      //   }
    });
  }, []);
  const AllValue = {
    user,
    creatUser,
    loginUser,
    googleLogin,
    githubLogin,
    logout,
  };
  return <AuthContx.Provider value={AllValue}>{children}</AuthContx.Provider>;
};

export default AuthProvider;
