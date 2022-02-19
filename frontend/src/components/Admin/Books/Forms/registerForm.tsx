import { useState } from "react";
import { IBooksProps } from "../../../../@types/books";
import { api } from "../../../../services/api";
import Modal from "../../../Modal";
import {
  Button,
  Form,
  FormContainer,
  FormHeader,
  Input,
  InputContainer,
} from "../../../Register/Body/styles";
export default function RegisterForm() {
  const [books, setBooks] = useState<IBooksProps>({
    name: "",
    genre: "",
    author: "",
  });
  const handleSubmit = (el: any) => {
    api
      .post("/livros", {
        name: books.name,
        genre: books.genre,
        access_level: "admin",
        author: books.author,
        reserved: "Não",
      })
      .then((res) => {
        window.alert("Sucesso! Livro cadastrado!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    window.location.reload();
    el.preventDefault();
  };
  return (
    <>
      <FormContainer>
        <FormHeader>Cadastrar livros</FormHeader>
        <Form>
          <InputContainer>
            Nome do livro
            <Input
              type="text"
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
              placeholder="AUTOR(A)"
              onChange={(el) =>
                setBooks((old) => ({ ...old, author: el.target.value }))
              }
            />
          </InputContainer>
          <Button onClick={(el) => handleSubmit(el)}>Cadastrar</Button>
        </Form>
      </FormContainer>
    </>
  );
}
