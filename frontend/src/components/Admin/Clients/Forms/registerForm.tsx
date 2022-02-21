import { useState } from "react";
import { IFormDataProps } from "../../../../@types/form";
import { api } from "../../../../services/api";
import {
  Button,
  Form,
  FormContainer,
  FormHeader,
  Input,
  InputContainer,
  Select,
} from "../../../Register/Body/styles";

export default function RegisterForm() {
  const [user, setUser] = useState<IFormDataProps>({
    username: "",
    email: "",
    password: "",
    access_level: "",
  });
  const handleSubmit = (el: any) => {
    api
      .post("/usuarios", {
        username: user.username,
        email: user.email,
        password: user.password,
        access_level: user.access_level,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    el.preventDefault();
  };
  return (
    <>
      <FormContainer>
        <FormHeader>Cadastrar clientes</FormHeader>
        <Form>
          <InputContainer>
            Nome do usuário
            <Input
              type="text"
              placeholder="NOME DO USUÁRIO"
              onChange={(el) =>
                setUser((old) => ({ ...old, username: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Email
            <Input
              type="text"
              placeholder="EMAIL"
              onChange={(el) =>
                setUser((old) => ({ ...old, email: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Senha
            <Input
              type="password"
              placeholder="SENHA"
              onChange={(el) =>
                setUser((old) => ({ ...old, password: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Nível de acesso
            <Select
              onChange={(el) =>
                setUser((old) => ({ ...old, access_level: el.target.value }))
              }
            >
              <option>Admin</option>
              <option>Cliente</option>
            </Select>
          </InputContainer>
          <Button onClick={(el) => handleSubmit(el)}>Cadastrar</Button>
        </Form>
      </FormContainer>
    </>
  );
}
