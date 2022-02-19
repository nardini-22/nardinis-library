import { useEffect, useState } from "react";
import { IBooksProps } from "../../../@types/books";
import { IFormDataProps } from "../../../@types/form";
import { api } from "../../../services/api";
import {
  BooksPageTitle,
  Table,
  TableButton,
  TableContainer,
  TableWrapper,
} from "../../Admin/Books/Body/styles";
import { ClientTableButton } from "./styles";

export default function Body() {
  const [data, setData] = useState<Array<IBooksProps>>([
    {
      name: "",
      genre: "",
      author: "",
      reserved: "",
    },
  ]);
  const [reserve, setReserve] = useState<boolean>(false);
  useEffect(() => {
    const getData = () => {
      api.get("/livros").then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);
  const handleReserve = (id: any) => {
    if (reserve === true) {
      window.alert("Esse livro já foi reservado!");
    } else {
      setReserve(true);
      api
        .put(`/livros/${id}`, {
          reserved: reserve,
        })
        .then((res) => {
          console.log(res.data);
          window.alert("Livro reservado com sucesso!");
        });
    }
  };
  const handleReturn = (id: any) => {
    if (reserve === false) {
      window.alert("Esse livro já foi retornado!");
    } else {
      setReserve(false);
      api
        .put(`/livros/${id}`, {
          reserved: reserve,
        })
        .then((res) => {
          console.log(res.data);
          window.alert("Livro retornado com sucesso!");
        });
    }
  };
  return (
    <>
      <BooksPageTitle>
        <h1>Livros</h1>
      </BooksPageTitle>
      <TableContainer>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Autor(a)</th>
                <th>Gênero</th>
                <th>Reserva</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user: any, index: any) => (
                <tr key={index}>
                  <td>{user.genre}</td>
                  <td>{user.name}</td>
                  <td>{user.author}</td>
                  <td>
                    <ClientTableButton onClick={() => handleReserve(user._id)}>
                      Reservar
                    </ClientTableButton>
                    <ClientTableButton onClick={() => handleReturn(user._id)}>
                      Devolver
                    </ClientTableButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </TableContainer>
    </>
  );
}
