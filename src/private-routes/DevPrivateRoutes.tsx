import { useUserContext } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";

interface User {
  role: string;
}

export const DevPrivateRoutes = ({ children }: any) => {
  const user = useUserContext();

  return user?.role === "DEV" ? children : <Navigate to={"/"} />;
};
