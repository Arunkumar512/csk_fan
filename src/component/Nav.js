import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import { Link } from 'react-router-dom';
import trophy23 from "./image/csk23.gif"
import flag from "./image/flag.gif"


function Navi() {
  return (
    <div>
      <Navbar id='navbar' bg="light" variant="light">
    
        <Navbar.Brand href="/"><img id='logo' src={flag} alt="" srcset="" /></Navbar.Brand>
        <Nav>
          <Link className='text' to="/home">Home</Link>
          <Link className='text' to="/Team">Team</Link>
          <Link className='text' to="/gallery">Gallery</Link>
          <Link><img id='centerlogo' src={trophy23} alt=""/></Link>
          <Link className='text' to="/wistlepodu">Wistlepodu</Link>
          <Link className='text' to="/shop">shop</Link>
          <Link className='text' to="/csktv">CskTv</Link>
          <Link className='text' to="/contactUs">ContactUs</Link>
        </Nav>
      </Navbar>
     
    </div>
  )
}

export default Navi
