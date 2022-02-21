import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  let user = false;
  const token = localStorage.getItem("isAuthenticated");
  console.log(token);
  if (token) {
    user = true;
    if (token === "admin") {
    } else if (token === "cliente") {
    }
  } else {
    user = false;
  }
  return user;
};

export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
