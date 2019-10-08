import React from "react"
import { isAuthenticated, login } from "../utils/auth"


const Login = () => {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }
return null
}
export default Login;