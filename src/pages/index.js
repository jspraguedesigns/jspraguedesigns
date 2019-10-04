import React from "react"
import Layout from "../components/shared/layout"
import { isAuthenticated, login } from "../utils/auth"

import Home from "../components/home"

const IndexPage = () => {
  if (!isAuthenticated()) {
    return (
      <div>
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
      </div>
    )
  } else {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}

export default IndexPage
