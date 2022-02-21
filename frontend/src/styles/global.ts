import { createGlobalStyle } from "styled-components";
import { darken, lighten } from "polished";

export const theme = {
  main: {
    primary: "#323645",
    primaryLight: lighten(0.2, "#323645"),
    primaryDark: darken(0.2, "#323645"),
    primaryText: "#fff",
  },
};

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Poppins";
  src: url("../../public/fonts/Poppins.woff") format("woff"),
    url("../../public/fonts/Poppins.woff2") format("woff2");
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; 
}

body{
    background: #f1f1f1;
    overflow: hidden;
}
`;
