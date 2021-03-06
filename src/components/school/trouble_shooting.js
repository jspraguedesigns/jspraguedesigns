import React from "react"
import { Link } from "gatsby"
import { navigate } from '@reach/router';


function navigatetothis (){
  navigate('/launch#requirements')
}

const TroubleShooting = () => {
  return (
    <div className="container bodyelc">
      <div className="row">
        <div className="col-md-12">
          <Link to="/launch">Launch</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pt-4 pb-4">
          <h1>Troubleshooting Guide</h1>
          <hr/>
          <div className="row">
            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>My computer crashed.</h5>

              <p>Move to another computer and login with your ID. The test will restart where you left off.</p>
            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">

              <h5>I cannot copy and paste the Student's Login ID to the secure browser.</h5>

              <p>Copy and paste is disabled during testing. Student Login ID must be typed in manually.</p>
            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>Error Message: Recieved an error message “Cant open this type of file (.seb)."</h5>
              <p>Make sure you installed the <strong>Safe Exam Browser</strong> before launching the test.</p>
            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>The Safe Exam Browser is not installed.</h5>
              <p>Ask your tech coordinator to install the browser.</p>
            </div>

            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>When I clicked on “Download Safe Exam Browser for Windows/Mac” and then clicked on “Run”, I received a
                message to enter admin username and password.</h5>

              <p><strong>Log out </strong>of computer and log back in with admin credentials.</p>

            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>Student Login ID provided did not work.</h5>

              <p>Double check to make sure you entered your Student Login ID correctly. If your ID still is not working,
                enter in <strong>Student Problem Report</strong>.</p>
            </div>

            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>When I launch the test I received a message "Permitted or Prohibited Processes Are Running".</h5>

              <p><strong>Click Cancel</strong> and close all running programs, then re-launch.</p>
            </div>


            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>I cannot hear the audio.</h5>

              <p>Make sure volume is set correctly. If you still cannot hear any audio, try a different pair of
                headphones.</p>
            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>My microphone is not working</h5>

              <p>Make sure your are using a supported microphone (bluetooth microphones may not work).</p>
            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">
            <h5> When I enter the Student Login ID, I recieve a notification that says "loading activities…“ that lasts for 1-5 minutes. </h5>

           <div className="jumplink" onClick ={navigatetothis} >Click here to review all system and bandwidth requirements.</div>
        
            <ol>
              <li>Test the Speed test on one computer that will be used in your testing lab at <a href="https://www.speedtest.net/">speedtest.net</a></li>
              <li>Conduct a latency test using <a href="https://www.cloudping.info/">cloudping.info</a> </li>
              <li>Conduct a detailed bandwidth test using <a href="https://cloudharmony.com/speedtest-for-aws">https://cloudharmony.com/speedtest-for-aws</a>   This test will take atleast 40 minutes to complete.</li> 
              <li> Email the results to ETS.</li>
            </ol>
            
            </div>
          </div>


        </div>

      </div>


    </div>

  )

}

export default TroubleShooting