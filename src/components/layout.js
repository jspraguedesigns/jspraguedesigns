import React from "react"
import Header from "./header"
import Footer from "./footer"
import {isAuthenticated, isBrowser} from "../utils/auth"
import {navigate} from "@reach/router";


const Layout = props => {
    // if (!isAuthenticated()) {
    //   login()
    //   return <p>Redirecting to login...</p>
    // }

    if (isBrowser && !isAuthenticated()) {
        // If we’re not logged in, redirect to the login page.
        navigate(`/`);
        return null;
    }

  return (

    <div>
      <Header/>

      {props.children}


      <Footer/>

    </div>
  )
};

export default Layout