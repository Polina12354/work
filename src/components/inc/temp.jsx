import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { LeftBlock } from './LeftBlock'

export const Temp = () => {
    return (     
        <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"> PHOTO </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" active>Главная</Nav.Link>
                <Nav.Link href="/card">Фотогалерея</Nav.Link>
                <Nav.Link href="/projects">Проекты</Nav.Link>
                <Nav.Link href="/about">О нас</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Container style={{ marginTop: '4.7rem' }}>
            <Row>
                <Col sm={12} md={2}>
                    <LeftBlock/>
                </Col>
                <Col sm={12} md={10}>
                   <Outlet/>
                </Col>
            </Row>    
        </Container>
        </>  
    )
}