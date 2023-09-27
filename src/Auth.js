import React, { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth'


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUserData] = useState(null);
  const [pending, setPending] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // console.log("app:::", app)

    getAuth().onAuthStateChanged((user) => {
        // console.log("user::",user)
        setCurrentUserData(user)
        setPending(false)
        if(user) setUserEmail(user.email)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    
    <AuthContext.Provider
      value={{
        currentUser,
        userEmail
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
