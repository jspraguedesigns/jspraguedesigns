import React from "react"
import Layout from "../components/shared/layout"
import {isAuthenticated, login} from "../utils/auth"

import Home from "../components/home"
import LayoutPublic from "../components/shared/layoutPublic";

const IndexPage = () => {
  if (!isAuthenticated()) {
    return (
        <LayoutPublic>
        <div className="row d-flex align-items-center justify-content-center  banner">
          <div className="col-md-6 text-center animated fadeInUp">
            <h1 className="home-text">
              English
              <br /> Learning
              <br /> Certificate
            </h1>
            <button
              type="button"
              className="btn btn-home-top btn btn-secondary mt-4"
              onClick={e => login()}
            >
              Login to access your account
            </button>
          </div>
          <div className="col-md-6 home-text" />
        </div>
        </LayoutPublic>
    )
  } else {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
};

export default IndexPage
