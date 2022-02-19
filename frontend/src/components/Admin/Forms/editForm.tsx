import { useEffect, useState } from "react";
import { IBooksProps } from "../../../@types/books";
import { api } from "../../../services/api";
import {
  Button,
  Form,
  FormContainer,
  FormHeader,
  Input,
  InputContainer,
} from "../../Register/Body/styles";

export default function EditForm({ id }: any) {
  const [books, setBooks] = useState<IBooksProps>({
    name: "",
    genre: "",
    author: "",
  });
  useEffect(() => {
    const getData = () => {
      api.get(`/livros/${id}`).then((res) => {
        setBooks(res.data);
      });
    };
    getData();
  }, []);
  const handleSubmit = (el: any) => {
    api.put(`/livros/${id}`, {
      name: books.name,
      genre: books.genre,
      access_level: "admin",
      author: books.author,
      reserved: false,
    });
    el.preventDefault();
    window.location.reload()
  };
  return (
    <>
      <FormContainer>
        <FormHeader>Editar livros</FormHeader>
        <Form>
          <InputContainer>
            Nome do livro
            <Input
              type="text"
              defaultValue={books.name}
              placeholder="NOME DO LIVRO"
              onChange={(el) =>
                setBooks((old) => ({ ...old, name: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Gênero
            <Input
              type="text"
              defaultValue={books.genre}
              placeholder="GÊNERO"
              onChange={(el) =>
                setBooks((old) => ({ ...old, genre: el.target.value }))
              }
            />
          </InputContainer>
          <InputContainer>
            Autor(a)
            <Input
              type="text"
              defaultValue={books.author}
              placeholder="AUTOR(A)"
              onChange={(el) =>
                setBooks((old) => ({ ...old, author: el.target.value }))
              }
            />
          </InputContainer>
          <Button onClick={(el) => handleSubmit(el)}>Editar</Button>
        </Form>
      </FormContainer>
    </>
  );
}
