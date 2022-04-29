import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import {useDispatch} from "react-redux"
import {Nav, NavDropdown, FormControl, Container} from 'react-bootstrap'
import { useSelector } from "react-redux"
import {logOut} from "../../reducers/userReducer"

const Navbar_ = () =>{
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">PictGet</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {!isAuth &&<Nav.Link href="/registration">Registration</Nav.Link>}
                {!isAuth &&<Nav.Link href="/login">Login</Nav.Link>}
                {isAuth &&<Nav.Link onClick={()=>dispatch(logOut())}>Login Out</Nav.Link>}
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default Navbar_