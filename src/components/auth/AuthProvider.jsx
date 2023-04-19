import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "../../assets/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLoggedUser = onAuthStateChanged(auth, (presentUser) => {
      setUser(presentUser);
      setLoading(false);
    });

    return () => {
      loadLoggedUser;
    };
  }, []);

  const singUpByMail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (user, name) => {
    return updateProfile(user, {
      displayName: name,
    });
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authValue = {
    user,
    setUser,
    singUpByMail,
    updateName,
    Login,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
