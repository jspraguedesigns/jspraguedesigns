import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/global.css"

const HeaderPublic = props => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://www.ets.org/rsc/img/ets-logo_68x46.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="ETS logo"
                    />
                    <span className="brand">ELC</span>
                </a>
            </nav>
        </div>
    )
};

export default HeaderPublic
