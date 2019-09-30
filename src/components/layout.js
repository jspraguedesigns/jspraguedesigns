import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

// import Amplify from "aws-amplify";
// import { withAuthenticator } from "aws-amplify-react";
// import config from "../aws-exports";
// Amplify.configure(config);

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <div>
    <Header/>
    {children}
    <Footer/>
  </div>
)

// export default withAuthenticator(Layout, true);

export default Layout