import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Nav } from 'react-bootstrap';
function Header() {
    return (
        <>
            <Navbar expand="lg" className="bgcolor py-4">
                <Container>
                    <Navbar.Brand><Link to="/">JSONPlaceholder</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><Link to="/Post">POST</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/Comments">COMMENTS</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/Album">ALBUM</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/Photo">PHOTO</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/Todos">TODOS</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/Users">USER</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;
