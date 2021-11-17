import React, {useState} from "react";
import { Container, Nav, Navbar, Button} from "react-bootstrap";
import OrderComponent from "../order-modal-component/order-component";
import LoginModal from "../login-admin-component";

export default function NavbarComponent(){
    const [orderModalShow, setOrderModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);

    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Nume aplicație</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#products">Produse</Nav.Link>
                    <Nav.Link href="#prices">Prețuri</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Button className="me-2" variant="outline-warning" onClick={() => setOrderModalShow(true)}>Închiriază acum</Button>
                <Button variant="outline-success" onClick={() => setLoginModalShow(true)}>Admin</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <OrderComponent show={orderModalShow} onHide={() => setOrderModalShow(false)}/>
        <LoginModal show={loginModalShow} onHide={() => setLoginModalShow(false)}/>
        </>
    )
}