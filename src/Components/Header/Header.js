import React from 'react';
import './Header.css';
import  { Navbar , Nav ,Form ,Button} from 'react-bootstrap';
import logo from '../../Resource/logo.jpg';
import {Link}  from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
               <img style={{width:'80px'}} src={logo} alt="" srcset="" />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                   
                </Nav>
                <Form inline >                  
                   <Link to ='/accountOpen'> <Button className='Button' variant="success">Create An Account</Button></Link>
                 
                </Form>
                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;