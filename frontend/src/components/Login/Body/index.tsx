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
} from "../../Register/Body/styles";

export default function Body() {
  const [data, setData] = useState<IFormDataProps>({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = (el: any) => {
    api
      .get(`/login/${data.password}/${data.username}`)
      .then((res) => {
        if (res.status === 401) {
        }
        if (res.data.length === 0) {
          window.alert(
            "Erro ao efetuar o login! Usuário ou senha estão errados ou não existem!"
          );
        } else {
          if (res.data.access_level === "Admin") {
            navigate("/admin");
          } else if (res.data.access_level === "Cliente") {
            navigate("/cliente");
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          window.alert("Erro ao efetuar o login! Preencha os campos!");
        }
      });
    el.preventDefault();
  };
  return (
    <>
      <FormContainer>
        <FormHeader>Login</FormHeader>
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
            Senha
            <Input
              type="password"
              placeholder="SENHA"
              onChange={(el) =>
                setData((old) => ({ ...old, password: el.target.value }))
              }
            />
          </InputContainer>
          <Button onClick={(el) => handleSubmit(el)}>Entrar</Button>
          <LinkLogin>
            Ainda não possuo uma conta<Link to={"/cadastro"}>Clique aqui!</Link>
          </LinkLogin>
        </Form>
      </FormContainer>
    </>
  );
}
