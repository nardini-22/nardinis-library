import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background: ${(props) => props.theme.main.primary};
  color: ${(props) => props.theme.main.primaryText};
  padding: 20px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavbarOptions = styled.button`
  margin: 0 10px 0 10px;
  padding: 10px;
  color: ${(props) => props.theme.main.primaryText};
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.main.primaryLight};
  }
  &:active {
    background: ${(props) => props.theme.main.primaryDark};
  }
`;
