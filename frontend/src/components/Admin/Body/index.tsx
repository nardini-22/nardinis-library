import { useEffect, useState } from "react";
import { IBooksProps } from "../../../@types/books";
import { api } from "../../../services/api";
import Modal from "../../Modal";
import EditForm from "../Forms/editForm";
import RegisterForm from "../Forms/registerForm";
import {
  BooksPageTitle,
  Table,
  TableButton,
  TableButtonContainer,
  TableContainer,
  TableWrapper,
} from "./styles";

export default function Body() {
  const [data, setData] = useState<Array<IBooksProps>>([
    {
      name: "",
      author: "",
      genre: "",
      reserved: false,
      _id: "",
    },
  ]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenRegister, setIsOpenRegister] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    const getData = () => {
      api.get("/livros").then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);
  const handleDelete = (id: any) => {
    api.delete(`/livros/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  const handleEdit = (id: any) => {
    setIsOpen(true);
    setId(id);
  };
  return (
    <>
      <BooksPageTitle>
        <h1>Livros</h1>
      </BooksPageTitle>
      <TableContainer>
        <TableWrapper>
        <TableButtonContainer>
          <TableButton onClick={() => setIsOpenRegister(true)}>
            Novo livro
          </TableButton>
        </TableButtonContainer>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Autor(a)</th>
                <th>Gênero</th>
                <th>Reservado</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {data.map((books, index) => (
                <tr key={index}>
                  <td>{books.name}</td>
                  <td>{books.author}</td>
                  <td>{books.genre}</td>
                  <td>{books.reserved ? "Sim" : "Não"}</td>
                  <td>
                    <TableButton onClick={() => handleEdit(books._id)}>
                      Editar
                    </TableButton>
                  </td>
                  <td>
                    <TableButton onClick={() => handleDelete(books._id)}>
                      Excluir
                    </TableButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </TableContainer>
      <Modal open={isOpen} closeModal={() => setIsOpen(false)}>
        <EditForm id={id} />
      </Modal>
      <Modal open={isOpenRegister} closeModal={() => setIsOpenRegister(false)}>
        <RegisterForm />
      </Modal>
    </>
  );
}
