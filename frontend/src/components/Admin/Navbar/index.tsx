import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavbarList, NavbarOptions } from "./styles";

export default function Navbar() {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <NavbarContainer>
        <NavbarList>
          <NavbarOptions onClick={() => navigate("/admin")}>
            Livros
          </NavbarOptions>
          <NavbarOptions onClick={() => navigate("/admin/clientes")}>
            Clientes
          </NavbarOptions>
          <NavbarOptions onClick={() => handleLogout()}>Sair</NavbarOptions>
        </NavbarList>
      </NavbarContainer>
    </>
  );
}
