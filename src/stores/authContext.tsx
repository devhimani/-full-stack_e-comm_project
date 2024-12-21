import { createContext, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState([]);
  return (
    <authContext.Provider value={{ users, setUsers }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
