import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import { Link } from 'react-router-dom';


function Navi() {
  return (
    <div>
      <Navbar id='navbar' bg="light" variant="light">
        <Navbar.Brand href="/"><img id='logo' src="https://1.bp.blogspot.com/-KfYGBc03UhI/ZAPR11M3rKI/AAAAAAAA9j0/aMusDB9todgw61LPmAUr8P0aMo6Hn0S0ACNcBGAsYHQ/s0/Chennai_Super_Kings_flag.gif" alt="" srcset="" /></Navbar.Brand>
        <Nav>
          <Link className='text' to="/home">Home</Link>
          <Link className='text' to="/Team">Team</Link>
          <Link className='text' to="/gallery">Gallery</Link>
          <Link><img id='centerlogo' src="https://www.chennaisuperkings.com/assets/images/thumbnail_white-logo-header.png" alt="" /></Link>
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