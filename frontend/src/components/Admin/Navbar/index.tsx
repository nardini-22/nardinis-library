import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavbarList, NavbarOptions } from "./styles";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <>
      <NavbarContainer>
        <NavbarList>
          <NavbarOptions onClick={() => navigate("/admin")}>
            Livros
          </NavbarOptions>
          <NavbarOptions onClick={() => navigate("/admin/reservas")}>
            Reservas
          </NavbarOptions>
          <NavbarOptions onClick={() => navigate("/admin/clientes")}>
            Clientes
          </NavbarOptions>
        </NavbarList>
      </NavbarContainer>
    </>
  );
}
