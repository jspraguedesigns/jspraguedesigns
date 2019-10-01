import React from "react"
import Header from "./header"
import Footer from "./footer"
import { isAuthenticated, login } from "../utils/auth"


const Layout = props => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  return (

    <div>
      <Header/>

      {props.children}


      <Footer/>

    </div>
  )
}

export default Layout