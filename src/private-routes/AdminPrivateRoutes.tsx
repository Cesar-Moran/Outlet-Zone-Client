import { useUserContext } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";

interface User {
  id: number;
  email: string;
  createdAt: any;
  role: string;
}

export const AdminPrivateRoutes = ({ children }: any) => {
  const user = useUserContext();

  return user?.role === "ADMIN" ? children : <Navigate to={"/"} />;
};
