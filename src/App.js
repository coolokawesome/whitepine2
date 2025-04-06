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
import Privacy from './Privacy';
import Book from './Book';

import Terms from './Terms';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(undefined);
  const [imgs, setImgs] = useState([])
  return (
    <div className='wrapper' onScroll={() => setScrolled(true)}> 
     {selectedImgIndex !== undefined && (
          <div
            style={{
              position: "sticky",
              top: 0,
              width: "100vw",
              height: "100vh",
              background: "#000000aa",
              zIndex: 1000000,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0%",
                transform: "translate(-50%, 5vh)",
              }}
            >
              <button style={{right: 0, top: 0, position: 'absolute', width: 40, height: 40}} className='border-0' onClick={() => setSelectedImgIndex(undefined)}>x</button>
              <img
                src={require(`${imgs[selectedImgIndex]}`)}
                style={{ height: "auto", maxWidth: '90vw', maxHeight: '90vh',  padding: 10, background: 'white'}}
              />
            </div>
          </div>
        )}
    <BrowserRouter >
        <Navbar   expand="md" variant="dark" sticky="top" className={` navbar ${scrolled ? 'bg-dark border-bottom' : 'bg-clear'}`}>
          <Navbar.Brand >
            <Link to='/'>
            <img className="navbar-brand img img-fluid ms-3" src={brandLogo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto me-3">
              <Nav.Item>
                <Link to="/" className="nav-link">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/galleries" className="nav-link">Galleries</Link>
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
          <Route path="/" element={<Home />} />
          <Route path="/galleries" element={<Galleries imgs={imgs} setImgs={setImgs} selectedImgIndex={selectedImgIndex} setSelectedImgIndex={setSelectedImgIndex} />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/book" element={<Book />} />
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
