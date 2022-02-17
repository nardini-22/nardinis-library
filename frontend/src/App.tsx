import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/global";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
