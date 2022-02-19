import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/global";
import Client from "./components/Client/client";
import Admin from "./components/Admin/admin";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cliente" element={<Client />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
