import React from 'react';
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavDropdown, Nav, Navbar} from 'react-bootstrap'
import '../styles/global.css';
const Header = () => {
  return(

 <Navbar bg="light" expand="md" fixed="top">
 <Navbar.Brand href="/">

  <div className="navbar-brand  d-flex align-items-center">
    <h1 className="brand">ELC</h1>
    <h2 className="tag">— Admin Portal</h2>
</div>

 </Navbar.Brand>



<Nav className="ml-auto">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse>
<Nav.Link href="/">
    Home
  </Nav.Link>
<NavDropdown title="ELC Overview">

    <NavDropdown.Item>
      <Link to="/about">
      <div className="dropdown-item">What Is ELC?</div>
      </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
      <Link to="/sample">
      <div className="dropdown-item">Sample Questions</div>
      </Link>
      </NavDropdown.Item>
   
  
</NavDropdown>
<NavDropdown title="Teacher's Resources">
      <NavDropdown.Item>
      <Link to="/support">
             <div className="dropdown-item">Support Materials</div>
          </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
          <Link to="/teacher_training">
      <div className="dropdown-item">Teacher Training</div>
      </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
          <Link to="/proctoring">
          <div className="dropdown-item">Proctoring</div>
      </Link>
          </NavDropdown.Item>

  </NavDropdown>
 
 <Nav.Link href="/test-results">
    Test Results
  </Nav.Link>

                  <Nav.Link href="/feedback">
        Feedback
        </Nav.Link>
        </Navbar.Collapse>
        </Nav>






</Navbar>

  
        
   
  )
 
}

export default Header