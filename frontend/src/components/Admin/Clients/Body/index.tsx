import { useEffect, useState } from "react";
import { IFormDataProps } from "../../../../@types/form";
import { api } from "../../../../services/api";
import Modal from "../../../Modal";
import {
  BooksPageTitle,
  Table,
  TableButton,
  TableButtonContainer,
  TableContainer,
  TableWrapper,
} from "../../Books/Body/styles";
import EditForm from "../Forms/editForm";
import RegisterForm from "../Forms/registerForm";

export default function Body() {
  const [data, setData] = useState<Array<IFormDataProps>>([
    {
      username: "",
      email: "",
      password: "",
      access_level: "",
    },
  ]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenRegister, setIsOpenRegister] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    const getData = () => {
      api.get("/usuarios").then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);
  const handleEdit = (id: any) => {
    setIsOpen(true);
    setId(id);
  };
  const handleDelete = (id: any) => {
    api.delete(`/usuarios/${id}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload();
  };
  return (
    <>
      <BooksPageTitle>
        <h1>Clientes</h1>
      </BooksPageTitle>
      <TableContainer>
        <TableWrapper>
          <TableButtonContainer>
            <TableButton onClick={() => setIsOpenRegister(true)}>
              Novo cliente
            </TableButton>
          </TableButtonContainer>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Senha</th>
                <th>Level de acesso</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user: any, index: any) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.access_level}</td>
                  <td>
                    <TableButton onClick={() => handleEdit(user._id)}>
                      Editar
                    </TableButton>
                  </td>
                  <td>
                    <TableButton onClick={() => handleDelete(user._id)}>
                      Excluir
                    </TableButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </TableContainer>
      <Modal open={isOpenRegister} closeModal={() => setIsOpenRegister(false)}>
        <RegisterForm />
      </Modal>
      <Modal open={isOpen} closeModal={() => setIsOpen(false)}>
        <EditForm id={id} />
      </Modal>
    </>
  );
}
