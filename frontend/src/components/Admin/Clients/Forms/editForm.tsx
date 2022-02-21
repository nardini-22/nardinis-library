import { useEffect, useState } from "react";
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

export default function EditForm({ id }: any) {
  const [user, setUser] = useState<IFormDataProps>({
    username: "",
    email: "",
    password: "",
    access_level: "",
  });
  useEffect(() => {
    const getData = () => {
      api.get(`/usuarios/${id}`).then((res) => {
        setUser(res.data);
      });
    };
    getData();
  }, []);
  const handleSubmit = (el: any) => {
    api
      .put(`/usuarios/${id}`, {
        username: user.username,
        email: user.email,
        password: user.password,
        access_level: user.access_level,
      })
      .then((res) => {
        window.location.reload();
      });
    el.preventDefault();
  };
  return (
    <>
      <FormContainer>
        <FormHeader>Editar clientes</FormHeader>
        <Form>
          <InputContainer>
            Nome do usuário
            <Input
              type="text"
              defaultValue={user.username}
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
              defaultValue={user.email}
              placeholder="EMAIL"
              onChange={(el) =>
                setUser((old) => ({ ...old, email: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Senha
            <Input
              type="text"
              defaultValue={user.password}
              placeholder="SENHA"
              onChange={(el) =>
                setUser((old) => ({ ...old, password: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Nível de acesso
            <Select
              value={user.access_level}
              onChange={(el) =>
                setUser((old) => ({ ...old, access_level: el.target.value }))
              }
            >
              <option>Admin</option>
              <option>Cliente</option>
            </Select>
          </InputContainer>
          <Button onClick={(el) => handleSubmit(el)}>Editar</Button>
        </Form>
      </FormContainer>
    </>
  );
}
