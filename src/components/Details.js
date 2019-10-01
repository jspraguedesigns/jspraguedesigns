import React from "react"
import { Link } from "gatsby"
import { getUserInfo } from "../utils/auth"

const Home = () => {
  const user = getUserInfo()
  console.log('user:', user)
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      <Link to="/app/home">Home</Link>
    </div>
  )
}

export default Home