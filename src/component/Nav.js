import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Nav.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import trophy23 from "./image/csk23.gif"
import flag from "./image/flag.gif"


function Navi() {
  return (
    <div>
      <Navbar expand="lg"  data-toggle="collapse" className=" bg-body-tertiary" id=
      "navbar">
        <Container>
          <Navbar.Brand href="/"><img id='logo' src={flag} alt="" srcset="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link className=' nav-link text' to="/home">Home</Link>
              <Link className=' nav-link text' to="/Team" >Link</Link>
              <Link className=' nav-link text' to="/gallery">Gallery</Link>
              <Link ><img className='bg-body-tertiary' id='centerlogo' src={trophy23} alt="" /></Link>
              <Link className=' nav-link text' to="/wistlepodu">Wistlepodu</Link>
              <Link className=' nav-link text' to="/shop">shop</Link>
              <Link className=' nav-link text' to="/csktv">CskTv</Link>
              <Link className=' nav-link text' to="/contactUs">ContactUs</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navi
