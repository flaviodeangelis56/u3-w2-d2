import { useState } from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = props => {
  const [bookName, setBookName] = useState("");
  const filterBookList = event => {
    event.preventDefault();
    const serchedBook = document.getElementById("serchBar").value;
    setBookName(serchedBook);
  };
  return (
    <Container fluid>
      <InputGroup className="mb-3 justify-content-center">
        <Form onSubmit={filterBookList} className="w-75">
          <Form.Group className="mb-3">
            <Form.Label className="fs-1">Serch a Book</Form.Label>
            <Form.Control type="text" id="serchBar" className="w-90" />
          </Form.Group>
          <Button type="submit" className="w-25" variant="danger">
            Serch
          </Button>
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
