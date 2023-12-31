import { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./MyComponents/MyNavBar";
import MyFooter from "./MyComponents/MyFooter";
import MyJumbotron from "./MyComponents/MyJumbotron";
import books from "./books/horror.json";
import BookList from "./MyComponents/BookList";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./MyComponents/CommentArea";
const App = () => {
  const [asin, setAsin] = useState("");
  const [selected, setSelected] = useState(false);
  const selectABook = (isSelected, asin) => {
    setSelected(isSelected);
    setAsin(asin);
  };

  return (
    <div className="App bg-dark text-white">
      <MyNavBar />

      <MyJumbotron />
      <Container fluid>
        <Row>
          <Col xs={8}>
            <BookList HorrorBooks={books} selected={selected} selectABook={selectABook} asinSelected={asin} />
          </Col>
          <Col xs={4}>
            <CommentArea asinSelected={asin} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
};

export default App;
