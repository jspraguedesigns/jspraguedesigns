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
          <h1>Welcome ETSers</h1>
          <h3> No Score reports for you</h3>

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
        <div>
          <Comments/>
          <h1>{getUserInfo()["https://elc.innovation.ets.org/app_metadata"].org}, score report will be available a few
            weeks afer all your students complete the test</h1>
        </div>
      )
  }
}
export default TestResults