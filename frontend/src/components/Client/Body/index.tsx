import { useEffect, useState } from "react";
import { IBooksProps } from "../../../@types/books";
import { api } from "../../../services/api";
import {
  BooksPageTitle,
  Table,
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
  useEffect(() => {
    const getData = () => {
      api.get("/livros").then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);
  const handleReserve = (id: any, reserved: any) => {
    if (reserved === true) {
      window.alert("Esse livro já foi reservado!");
    } else {
      api
        .put(`/livros/${id}`, {
          reserved: true,
        })
        .then((res) => {
          console.log(res.data);
          window.alert("Livro reservado com sucesso!");
        });
    }
  };
  const handleReturn = (id: any, reserved: any) => {
    if (reserved === "false") {
      window.alert("Esse livro já foi retornado!");}
    // } else {
    //   console.log(reserved);
    //   api
    //     .put(`/livros/${id}`, {
    //       reserved: false,
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //       window.alert("Livro retornado com sucesso!");
    //     });
    // }
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
                <th>Reservado</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user: any, index: any) => (
                <tr key={index}>
                  <td>{user.genre}</td>
                  <td>{user.name}</td>
                  <td>{user.author}</td>
                  <td>
                    <ClientTableButton
                      onClick={() => handleReserve(user._id, user.reserved)}
                    >
                      Reservar
                    </ClientTableButton>
                    <ClientTableButton onClick={() => handleReturn(user._id, user.reserved)}>
                      Devolver
                    </ClientTableButton>
                  </td>
                  <td>{user.reserved}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </TableContainer>
    </>
  );
}
