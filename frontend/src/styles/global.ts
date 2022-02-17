import { createGlobalStyle } from "styled-components";

export const theme = {
  main: {
    primary: "#323645",
  },
};

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
}

body{
    background: #f1f1f1;
}
`;
