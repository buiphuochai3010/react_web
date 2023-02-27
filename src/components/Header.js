import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/image/pokebee square.jpg'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {

    return (
        // <nav className='navbar navbar-light bg-light'>
        //     <div className='col-sm container-sm'>
        //         <Link to='/' className='text-decoration-none text-center navbar-brand'>
        //             <img class='rounded mx-auto d-block' width={'50px'} height={'50px'} src={logo} alt='Logo' />
        //             <p className='m-0'>ShinSekai</p>
        //         </Link>
        //     </div>
        //     <div className='col-sm container-sm'>
        //         <form class="form-inline my-2 my-lg-0">
        //             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        //             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </div>
        //     <div className='col-sm container-sm'>
        //         <FaIcons.FaRegLightbulb />
        //     </div>
        // </nav>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to='/' className='text-decoration-none text-center m-0'>
                    <img class='rounded mx-auto d-block' width={'50px'} height={'50px'} src={logo} alt='Logo' />
                    <p className='m-0'>ShinSekai</p>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                <FaIcons.FaRegLightbulb />
                <div>
                    <Nav.Link href="#action2">
                        <BiIcons.BiLogIn />
                        Đăng nhập
                    </Nav.Link>
                </div>
            </Container>
        </Navbar>
    )
}
