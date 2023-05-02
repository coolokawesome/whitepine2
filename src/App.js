import React, { useState } from 'react';
import { Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import Galleries from './Galleries';
import Artists from './Artists';
import Contact from './Contact';
import FAQ from './FAQ';
import OurStory from './OurStory';
import Splash from './Splash';
import brandLogo from './imgs/WPTI_Icon_White.png';

function App() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className='wrapper' onScroll={() => setScrolled(true)}> 
    <BrowserRouter >
        <Navbar   expand="lg" variant="dark" sticky="top" className={` navbar ${scrolled ? 'bg-dark border-bottom' : 'bg-clear'}`}>
          <Navbar.Brand href="#home">
            <img className="navbar-brand img img-fluid ms-3" src={brandLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto me-3">
              <Nav.Item>
                <Link to="/home" className="nav-link">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/galleries" className="nav-link">Galleries</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/artists" className="nav-link">Artists</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contact" className="nav-link">Contact</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/faq" className="nav-link">FAQ</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/ourstory" className="nav-link">Our Story</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ourstory" element={<OurStory />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
