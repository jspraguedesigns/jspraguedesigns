import React from 'react'
import {Link} from "gatsby"

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
                <hr />
                <div className="row">
                <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>My computer crashed</h5>

                    <p><strong>Move to another computer and login with your ID. The test will restart where you left off.</strong></p>
                    </div>
                <div className="col-md-12 border-bottom pb-4 pt-4">

                    <h5>I cannot copy and paste student's Login ID to the secure browser.</h5>

                    <p><strong>Copy and paste is disabled during testing. Student Login ID must be typed in manually.</strong></p>
                    </div>
                    <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>Error Message: Received an error message “Cant open this type of file (.seb).</h5>
                    <p><strong>Make sure you installed the Safe Exam Browser before launching the test.</strong></p>
                    </div>
                    <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>The Safe Exam Browser is not installed.</h5>
                    <p><strong>Ask your tech coordinator to install the browser.</strong></p>
                    </div>
                   
                    <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>When clicked on “Download Safe Exam Browser for Windows/Mac”  and then “Run”, received a message to enter admin username and password.</h5>

                    <p><strong>Log out of computer and log back in with admin credentials.</strong></p>

                    </div>
                    <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>Student Login ID provided did not work.</h5>

                    <p><strong>Double check to make sure you entered ID correctly. If ID still is not working, enter in Student Problem Report</strong></p>
                    </div>
                  
                    <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>When I launch the test I recieved a message "Permitted or Prohibited Processes Are Running"</h5>

                    <p><strong>Click Cancel and close all running programs, then re-launch.</strong></p>
                    </div>

               
                    <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>I cannot hear the audio</h5>

                    <p><strong>Make sure volume is set correctly. If you still cannot hear any audio, try a different pair of headphones.</strong></p>
                    </div>
                    <div className="col-md-12 border-bottom pb-4 pt-4">
                    <h5>My microphone is not working</h5>

                    <p><strong>Make sure your are using a supported microphone (bluetooth microphones may not work).</strong></p>
                    </div>
                
                </div>
               


                </div>
          
            </div>


        </div>

    )

}

export default TroubleShooting