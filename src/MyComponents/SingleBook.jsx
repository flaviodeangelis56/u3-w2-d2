import { Card, Col } from "react-bootstrap";

const SingleBook = props => {
  return (
    <Col xs={6} className="mb-5" key={`book-${props.HorrorBook.title}`}>
      <Card
        id={props.HorrorBook.asin}
        style={{ minHeight: "550px" }}
        className={props.asinSelected === props.HorrorBook.asin ? "borderRed" : ""}
      >
        <Card.Img
          variant="top"
          src={props.HorrorBook.img}
          style={{ width: "objectfit", height: "400px" }}
          onClick={() => {
            props.selectABook(!props.selected, props.HorrorBook.asin);
          }}
        />
        <Card.Body>
          <Card.Title>{props.HorrorBook.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
