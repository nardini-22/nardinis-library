import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  let user = false;
  const token = localStorage.getItem("isAuthenticated");
  if (token) {
    user = true;
  } else {
    user = false;
  }
  return user;
};

export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
