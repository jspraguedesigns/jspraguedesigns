import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../styles/global.css"
import { getUserInfo, isAuthenticated, login, logout } from "../utils/auth"

const Header = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  } else {
  const user = getUserInfo()
    return (

      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">

          <div className="navbar-brand  d-flex align-items-center">
            <h1 className="brand">ELC</h1>
            <h2 className="tag">— Admin Portal</h2>
          </div>
          <div> Welcome, {user.name ? user.name : "friend"}! </div>
        </Navbar.Brand>


        <Nav className="ml-auto">

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse>
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <NavDropdown title="ELC Overview" id={"4628376526"}>

              <NavDropdown.Item href="/about">
                What Is ELC?
              </NavDropdown.Item>
              <NavDropdown.Item href="/sample">
                Sample Questions
              </NavDropdown.Item>


          </NavDropdown>
            <NavDropdown title="Teacher's Resources" id={"0807598482"}>
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

            <Nav.Link
              href="#logout"
              onClick={e => {
                logout()
                e.preventDefault()
              }}
            >
              Log Out
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>


      </Navbar>


    )
  }
}

export default Header