import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../../styles/global.css"
import { getUserInfo, isAuthenticated, login, logout } from "../../utils/auth"

const HeaderPublic = (props) => {

    return (
<div>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">

          <div className="navbar-brand  d-flex align-items-center">
            <h1 className="brand">ELC</h1>
            <h2 className="tag"></h2>
          </div>
        </Navbar.Brand>
      </Navbar>

</div>
    )
  // }
}

export default HeaderPublic