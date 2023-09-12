import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";
function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-dark text-white border-b-whithe">
      <Container fluid>
        <img src={logo} alt="logo react" style={{ width: "5%" }} />
        <Navbar.Brand href="#home" className="text-white">
          My Horror Books react-shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
