import React from "react"
import Comments from "../comments"
import Schenzen from "../schenzen"
import { getUserInfo } from "../../utils/auth"


const TestResults = () => {

  let userDomain = getUserInfo()["https://elc.innovation.ets.org/app_metadata"].domain
  switch (userDomain) {
    case "ets.org":
      // code block
      return (
        <div>
          <Comments/>
          <div className="container">

            <div className="row">
              <div className="col-md-12 bodyelc">
              <h1>Welcome ETSers</h1>
               <h3 className="tag"> No score reports for you.</h3>
              </div>
            </div>

          </div>
       

        </div>
      )
      break
    case "cn-school.com":
      // code block
      return (
        <div>
          <Comments/>
          <Schenzen/>
        </div>
      )
      break
    default:
      // code block
      return (
        <div className="container">

        <div className="row">
          <div className="col-md-12 bodyelc">
          <Comments/>
          <h1>{getUserInfo()["https://elc.innovation.ets.org/app_metadata"].org}, score report will be available a few
            weeks afer all your students complete the test</h1>
        </div>
        </div></div>
      )
  }
}
export default TestResults