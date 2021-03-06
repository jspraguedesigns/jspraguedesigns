import React from "react"
import {navigate, Router} from "@reach/router"
import {getUserInfo, isAuthenticated} from "../utils/auth"
import Layout from "../components/shared/layout"
import About from "../components/about"
import Support from "../components/school/support"
import Proctoring from "../components/school/proctoring"
import Sample from "../components/sample"
import Training from "../components/school/teacher_training"
import Launch from "../components/school/launch"
import TestResults from "../components/school/test-results"
import TroubleShooting from "../components/school/trouble_shooting"
import ScoreCalculation from "../components/scoring"

const App = () => {
  // if (!isBrowser) {
  //   return (
  //       "you need a browser to access this site"
  //     )
  // }
  if (!isAuthenticated()) {
      navigate("/");
      return <p>Redirecting to login...</p>
    
  } else {
      const user = getUserInfo();
      console.log(user.name);

    return (
      <>
          <Layout user={user}>
              {/*<div className="navbar-text text-wrap font-italic">*/}
              {/*                    {user.name ? user.name : "friend"}*/}
              {/*</div>*/}
          <Router>
            <About path="/app/about" />
            <Support path="/app/support" />
            <Proctoring path="/app/proctoring" />
            <Sample path="/app/sample" />
            <Training path="/app/teacher_training" />
            <Launch path="/app/launch" />
            <TestResults path="/app/test-results" />
            <TroubleShooting path="/app/trouble_shooting" />
            <ScoreCalculation path="/app/scoring" />
          </Router>
        </Layout>
      </>
    )
  }
};

export default App
