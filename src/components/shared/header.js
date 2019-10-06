import React from "react"
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
                            <NavDropdown.Item href="/app/about">
                                What Is ELC?
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/app/sample">
                                Sample Questions
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Teacher's Resources" id={"0807598482"}>
                            <NavDropdown.Item href="/app/support">
                                Support Materials
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/app/teacher_training">
                                Teacher Training
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/app/proctoring">
                                Proctoring
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/app/test-results">
                            Test Report <small>(Beta)</small>
                        </Nav.Link>

                        <Nav.Link
                            href="#logout"
                            onClick={e => {
                                logout();
                                e.preventDefault()
                            }}
                        >
                            Log Out
                        </Nav.Link>
                                                <Nav.Link href="/app/about"> About </Nav.Link>
                                                <Nav.Link href="/app/sample">Sample</Nav.Link>
                        <Nav.Link href="/app/support"> Support</Nav.Link>
                        <Nav.Link href="/app/teacher_training">Teacher_training</Nav.Link>
                        <Nav.Link href="/app/proctoring">Proctoring</Nav.Link>
                        <Nav.Link href="/app/test-results">Test-results</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        </div>
    )
 
};

export default Header
