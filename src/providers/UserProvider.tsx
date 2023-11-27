import React, { useEffect, useState, useContext } from "react";

interface User {
  id: number;
  email: string;
  createdAt: any;
  role: string;
}

const userContext = React.createContext<User | null>(null);
const userToggleContext = React.createContext({});

export function useUserContext() {
  return useContext(userContext);
}

export function useToggleContext() {
  return useContext(userToggleContext);
}

function UserProvider({ children }: any) {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const token = localStorage.getItem("token");

  const parseJwt = (token: string) => {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));

      // Convertir el campo 'email' a cadena
      if (decodedToken.email) {
        decodedToken.email = decodedToken.email.toString();
      }

      return decodedToken;
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    if (token) {
      const user = parseJwt(token);

      setUserInfo(user);
    }
  }, [token]);

  return (
    <userContext.Provider value={userInfo}>
      <userToggleContext.Provider value={parseJwt}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}

export default UserProvider;
