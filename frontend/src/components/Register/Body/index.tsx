import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IFormDataProps } from "../../../@types/form";
import { api } from "../../../services/api";
import {
  Button,
  Form,
  FormContainer,
  FormHeader,
  Input,
  InputContainer,
  LinkLogin,
} from "./styles";

export default function Body() {
  const [data, setData] = useState<IFormDataProps>({
    username: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = (el: any) => {
    api
      .post("/usuarios", {
        username: data.username,
        email: data.email,
        password: data.password,
        access_level: "Cliente",
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
      })
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
              type="text"
              placeholder="NOME"
              onChange={(el) =>
                setData((old) => ({ ...old, username: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Email
            <Input
              type="text"
              placeholder="EMAIL"
              onChange={(el) =>
                setData((old) => ({ ...old, email: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Senha
            <Input
              type="password"
              placeholder="SENHA"
              onChange={(el) =>
                setData((old) => ({ ...old, password: el.target.value }))
              }
            />
          </InputContainer>
          <Button onClick={(el) => handleSubmit(el)}>Cadastrar</Button>
          <LinkLogin>
            Já possuo uma conta<Link to={"/login"}>Clique aqui!</Link>
          </LinkLogin>
        </Form>
      </FormContainer>
    </>
  );
}
