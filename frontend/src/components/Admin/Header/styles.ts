import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${(props) => props.theme.main.primary};
    color: ${(props) => props.theme.main.primaryText};
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 50px;
    height: 50px;
`;
