import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import "../../styles/global.css"
import {getUserInfo, isAuthenticated, login, logout} from "../../utils/auth"

const Header = () => {
 
    const user = getUserInfo();
    return (
        <div>
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
                            <Link  to="/app/about"> About </Link><br/>
                            <Link  to="/app/sample">Sample Questions</Link><br/>
                        </NavDropdown>
                        <NavDropdown title="Teacher's Resources" id={"0807598482"}>
                            <Link  to="/app/support"> Support Materials</Link><br/>
                            <Link  to="/app/teacher_training">Training</Link><br/>
                            <Link  to="/app/proctoring">Proctoring</Link><br/>
                            <Link  to="/app/launch">Launch Test</Link><br/>
                        </NavDropdown>

                        <Link className="nav-link" to="/app/test-results">Test Report <small>(Beta)</small></Link>

                        <Nav.Link
                            href="#logout"
                            onClick={e => {
                                logout();
                                e.preventDefault()
                            }}
                        >
                            Log Out
                        </Nav.Link>
                                    
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        </div>
    )
 
};

export default Header
