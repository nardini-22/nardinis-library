import styled from "styled-components";

export const Form = styled.form`
  background: ${(props) => props.theme.main.primaryText};
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
`;

export const FormContainer = styled.div`
  display: block;
`;

export const FormHeader = styled.header`
  background: ${(props) => props.theme.main.primary};
  color: ${(props) => props.theme.main.primaryText};
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px 5px 0 0;
`;

export const Input = styled.input`
  margin: 5px 0 5px 0;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.main.primary};
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.main.primary};
  color: ${(props) => props.theme.main.primaryText};
  outline: none;
  border: none;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  margin: 20px 0 20px 0;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.main.primaryLight};
  }
  &:active {
    background: ${(props) => props.theme.main.primaryDark};
  }
`;
