import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "../Firbase/Firbase.config";

export const AuthContx = createContext(null);
const googlepro = new GoogleAuthProvider();
const githubpro = new GithubAuthProvider();
const facbookpro = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [lodding, setloding] = useState(true);
  // console.log(user);
  //creat users
  const creatUser = (email, password) => {
    setloding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // updats profile
  const updateuserprofil = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };

  // Login user
  const loginUser = (email, password) => {
    setloding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logout = () => {
    setuser(null);
    return signOut(auth);
  };

  //GOOGLE LOGIN
  const googleLogin = () => {
    setloding(true);
    return signInWithPopup(auth, googlepro);
  };
  //Github LOGIN
  const githubLogin = () => {
    setloding(true);
    return signInWithPopup(auth, githubpro);
  };
  //twiter LOGIN
  const facbookLogin = () => {
    setloding(true);
    return signInWithPopup(auth, facbookpro);
  };

  //objerver
  useEffect(() => {
    const unsubcrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        setloding(false);
      }
      //   else {
      //     // User is signed out
      //     // ...
      //   }
    });
    return () => unsubcrib();
  }, []);
  const AllValue = {
    user,
    creatUser,
    loginUser,
    googleLogin,
    githubLogin,
    logout,
    facbookLogin,
    lodding,
    updateuserprofil,
  };
  return <AuthContx.Provider value={AllValue}>{children}</AuthContx.Provider>;
};

export default AuthProvider;
