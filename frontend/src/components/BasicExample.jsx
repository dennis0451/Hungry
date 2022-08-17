import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../static/large.png'
import Button from 'react-bootstrap/Button';


function BasicExample(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='ml-auto'>
        <img src={logo} alt="" className='logo' href='/'/>
        </Navbar.Brand>

        {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
        {/* <Navbar.Brand href="#/userpage">Cookbook</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto" farright>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#/userpage">Cookbook</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>      

      {props.user && <Button variant="outline-danger"onClick={props.logOut} >Logout</Button>}

        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;