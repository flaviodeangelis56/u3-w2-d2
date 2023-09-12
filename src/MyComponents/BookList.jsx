import { useState } from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = props => {
  // state = {
  //   bookName: "",
  // };
  const [bookName, setBookName] = useState("");
  const filterBookList = event => {
    event.preventDefault();
    const serchedBook = document.getElementById("serchBar").value;
    setBookName(serchedBook);
  };
  return (
    <Container>
      <InputGroup className="mb-3">
        <Form onSubmit={filterBookList}>
          <Form.Group className="mb-3">
            <Form.Label>Serch a Book</Form.Label>
            <Form.Control type="text" id="serchBar" />
          </Form.Group>
          <Button type="submit">Serch</Button>
        </Form>
      </InputGroup>
      <Row>
        {props.HorrorBooks.filter(book => book.title.toLowerCase().includes(bookName.toLowerCase())).map((book, i) => (
          <SingleBook
            HorrorBook={book}
            key={i}
            selected={props.selected}
            selectABook={props.selectABook}
            asinSelected={props.asinSelected}
          />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;