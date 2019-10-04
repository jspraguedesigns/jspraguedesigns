// import React from "react"
// import { Router } from "@reach/router"
// import Layout from "../components/layout"
// import Login from "../components/login"
// import PrivateRoute from "../components/shared/PrivateRoute"
// import About from "../components/about"
// import Support from "../components/support";
// import Proctoring from "../components/proctoring";
// import Sample from "../components/sample";
// import Training from "../components/teacher_training";
// import {getUserInfo} from "../utils/auth";
// import Details from "../components/Details";
//
//
// // const Account = () =>{
// //     console.log(window.location.href);
// //     // console.log(props.location.pathname)
// //     return (
// //        <>
// //         <Layout>
// //             <Router>
// //                 <PrivateRoute path="/account/about" component={About} />
// //                 <PrivateRoute path="/account/support" component={Support} />
// //                 <PrivateRoute path="/account/proctoring" component={Proctoring} />
// //                 <PrivateRoute path="/account/sample" component={Sample} />
// //                 <PrivateRoute path="/account/training" component={Training} />
// //                 <PrivateRoute path="/account/about" component={About} />
// //                 <Login path="/account/login" component={Login} />
// //             </Router>
// //         </Layout>
// //            </>
// //     )
// // }
//
//
// const Account = () =>{
//     console.log(window.location.href);
//     console.log(props.location.pathname)
//     if (!isAuthenticated()) {
//         login()
//         return <p>Redirecting to login...</p>
//     }
//     const user = getUserInfo();
//     return (
//         <>
//         <Layout>
//             <Router>
//                 <About path="/account/about" />
//                 <Support path="/account/support"  />
//                 <Proctoring path="/account/proctoring"  />
//                 <Sample path="/account/sample"  />
//                 <Training path="/account/training"  />
//                 <Details path="/account/details"  />
//             </Router>
//         </Layout>
//         </>
//     )
// }
//
//
// export default Account;

// src/pages/account.js
import React from "react"
import {navigate, Router} from "@reach/router"
import {login, logout, isAuthenticated, getUserInfo, isBrowser} from "../utils/auth"
import { Link } from "gatsby"
import Layout from "../components/shared/layout";
import About from "../components/about"
import Support from "../components/school/support";
import Proctoring from "../components/school/proctoring";
import Sample from "../components/sample";
import Training from "../components/school/teacher_training";



// const Home = ({ user }) => {
//     return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
    if (isBrowser && !isAuthenticated()) {
        navigate("/")
        return null
    } else {
        const user = getUserInfo()
        // console.log(user.name);

        return (
            <>
                <Layout user={user}>
                    {/*<nav>*/}
                    {/*    <Link to="/account/">Home</Link>{" "}*/}
                    {/*    <Link to="/account/settings/">Settings</Link>{" "}*/}
                    {/*    <Link to="/account/billing/">Billing</Link>{" "}*/}
                    {/*    <Link to="/account/about/">About</Link>{" "}*/}
                    {/*    <a*/}
                    {/*        href="#logout"*/}
                    {/*        onClick={e => {*/}
                    {/*            logout()*/}
                    {/*            e.preventDefault()*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        Log Out*/}
                    {/*    </a>*/}
                    {/*</nav>*/}
                    <Router>
                        {/*<Home path="/account/" user={user}/>*/}
                        <Settings path="/account/settings"/>
                        <Billing path="/account/billing"/>
                        <About path="/account/about"/>
                        <Support path="/account/support"/>
                        <Proctoring path="/account/proctoring"/>
                        <Sample path="/account/sample"/>
                        <Training path="/account/training"/>
                    </Router>
                </Layout>
            </>
        )
    }
}

export default Account