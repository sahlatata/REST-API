import {Container, Nav, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"
const NavProduct =()=>{
    return(
        <div>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link  as={Link} to="/product">Products</Nav.Link>
    <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
    </Nav>
    </Container>
</Navbar>
        </div>
    )
}

export default NavProduct