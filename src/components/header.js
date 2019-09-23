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

    <NavDropdown.Item href="/about"> 
      What Is ELC?
      </NavDropdown.Item>
      <NavDropdown.Item href="/sample">
     Sample Questions
      </NavDropdown.Item>
   
  
</NavDropdown>
<NavDropdown title="Teacher's Resources">
      <NavDropdown.Item href="/support">
          Support Materials
          </NavDropdown.Item>
          <NavDropdown.Item href="/teacher_training">
      Teacher Training
          </NavDropdown.Item>
          <NavDropdown.Item href="/proctoring">
    Proctoring

          </NavDropdown.Item>

  </NavDropdown>
 
 <Nav.Link href="/test-results">
    Test Report <small>(Beta)</small>
  </Nav.Link>

        </Navbar.Collapse>
        </Nav>






</Navbar>

  
        
   
  )
 
}

export default Header