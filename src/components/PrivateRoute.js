import React from "react"
import { navigate } from "@reach/router"
import { isAuthenticated } from "../utils/auth"

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, location, ...rest } = this.props
    if (!isAuthenticated()) {
      navigate(`/app/login`)
      return null
    }
    return <Component {...rest} />
  }
}

export default PrivateRoute