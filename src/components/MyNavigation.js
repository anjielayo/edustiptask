import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function MyNavigation() {
  return (
    <div>
      <Navbar
        bg="white"
        className="mt-4 mx-3 border border-dark rounded"
      >
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#contact" className="text-dark">Contact us</Nav.Link>
              <Button variant="warning" className="mx-3">Signup</Button>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
    </div>
  );
}

export default MyNavigation;
