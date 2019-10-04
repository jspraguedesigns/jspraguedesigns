// // src/pages/account.js
// import React from "react"
// import { Router } from "@reach/router"
// import {login, logout, isAuthenticated, getProfile, getUserInfo} from "../utils/auth"
// import { Link } from "gatsby"
// import About from "../components/about"
// import Layout from "../components/layout";
//
//
// const Home = ({ user }) => {
//     return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }
// const Settings = () => <p>Settings</p>
// const Billing = () => <p>Billing</p>
//
// const Account = () => {
//     if (!isAuthenticated()) {
//         login()
//         return <p>Redirecting to login...</p>
//     }
//
//     const user = getUserInfo()
//
//     return (
//         <>
//             <Layout>
//             <nav>
//                 <Link to="/account/">Home</Link>{" "}
//                 <Link to="/account/settings/">Settings</Link>{" "}
//                 <Link to="/account/billing/">Billing</Link>{" "}
//                 <Link to="/account/about/">About</Link>{" "}
//                 <a
//                     href="#logout"
//                     onClick={e => {
//                         logout()
//                         e.preventDefault()
//                     }}
//                 >
//                     Log Out
//                 </a>
//             </nav>
//             <Router>
//                 <Home path="/account/" user={user} />
//                 <Settings path="/account/settings" />
//                 <Billing path="/account/billing" />
//                 <About path="/account/about" />
//             </Router>
//             </Layout>
//         </>
//     )
// }
//
// export default Account

import React from "react"

const old = props => {

    return (

        <div>
nothing here
        </div>
    )
};

export default old