import { Button } from "react-bootstrap";

function MyJumbotron() {
  return (
    <div className="my-5">
      <h1>Horror Books</h1>
      <p>
        This is a horror book online store, you can find hundreds of books here, just start scrolling down below and
        choose your favorites
      </p>
      <p>
        <Button variant="danger" style={{ width: "10%" }}>
          Cart{" "}
        </Button>
      </p>
      <hr />
    </div>
  );
}

export default MyJumbotron;
