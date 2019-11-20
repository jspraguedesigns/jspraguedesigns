import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../../styles/global.css"
import { getUserInfo, logout } from "../../utils/auth"

const Header = () => {
  return (
      <div>
        
        <div className="login container-fluid d-flex">
        <div className="ml-auto">
        <div className="navbar-text text-wrap font-italic">
          {getUserInfo().name ? getUserInfo().name : "friend"} &nbsp;
          {getUserInfo()["https://elc.innovation.ets.org/app_metadata"].org}
              </div>
              &nbsp;
        <Link
                  href="#logout"
                  onClick={e => {
                    logout();
                    e.preventDefault()
                  }}
              >
                Log Out
              </Link>
           
        </div>
 
        </div>
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="/">
            <div className="navbar-brand  d-flex align-items-center">
              <img
                  src="https://www.ets.org/rsc/img/ets-logo_68x46.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="ETS logo"
              />
              <span className="brand">ELC</span>
              <span className="tag">— Admin Portal</span>
            </div>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
              <NavDropdown title="ELC Overview" id={"4628376526"}>
                <Link className="dropdown-item" to="/app/about">
                  About
                </Link>
                <Link className="dropdown-item" to="/app/sample">
                  Sample Questions
                </Link>
              </NavDropdown>
              <NavDropdown title="Teacher's Resources" id={"0807598482"}>
                <Link className="dropdown-item" to="/app/support">
                  Support Materials
                </Link>
                <Link className="dropdown-item" to="/app/proctoring">
                  Proctoring
                </Link>

                <Link className="dropdown-item" to="/app/launch">
                  Launch Test
                </Link>
              </NavDropdown>

              <Link className="nav-link" to="/app/test-results">
              ELC Entry Results
              </Link>

         
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
  )
};

export default Header
