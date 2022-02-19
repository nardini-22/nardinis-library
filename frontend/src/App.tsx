import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/global";
import Client from "./components/Client/client";
import Admin from "./components/Admin/admin";
import Clients from "./components/Admin/Clients/clients";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/cadastro" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/clientes" element={<Clients />} />
          <Route path="/cliente" element={<Client />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
