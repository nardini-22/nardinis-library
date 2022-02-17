import { useState } from "react";
import { IFormDataProps } from "../../../@types/form";
import { api } from "../../../services/api";
import {
  Button,
  Form,
  FormContainer,
  FormHeader,
  Input,
  InputContainer,
} from "./styles";

export default function Body() {
  const [data, setData] = useState<IFormDataProps>({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = (el: any) => {
    api
      .post("/usuarios", {
        username: data.username,
        email: data.email,
        password: data.password,
        access_level: "client",
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err.response.data);
      });
    el.preventDefault();
    console.log(data);
  };
  return (
    <>
      <FormContainer>
        <FormHeader>Cadastro</FormHeader>
        <Form>
          <InputContainer>
            Nome
            <Input
              placeholder="NOME"
              onChange={(el) =>
                setData((old) => ({ ...old, username: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Email
            <Input
              placeholder="EMAIL"
              onChange={(el) =>
                setData((old) => ({ ...old, email: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Senha
            <Input
              placeholder="SENHA"
              onChange={(el) =>
                setData((old) => ({ ...old, password: el.target.value }))
              }
            />
          </InputContainer>
          <Button onClick={(el) => handleSubmit(el)}>Cadastrar</Button>
        </Form>
      </FormContainer>
    </>
  );
}
