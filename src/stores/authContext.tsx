import { createContext, useState } from "react";

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IAuth {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export const authContext = createContext<IAuth>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  return (
    <authContext.Provider value={{ users, setUsers }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
