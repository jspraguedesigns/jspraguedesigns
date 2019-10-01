import React from "react"
import Layout from "../components/layout"
import "jquery/dist/jquery.js"


const proctoring = () => {
  return (

    <Layout>
      <div className="container">

        <div class="row">
          <div class="col-md-12 pt-4 pb-4">
            <h1>Proctoring Guidelines</h1>
            <hr/>
            <h2>Roles</h2>
            <p>Each school must have at least one <strong>Administrator</strong> who is responsible for running the
              test. </p>
            <p>In addition, each school requires one or more <strong>Proctors</strong> to assist
              the <strong>Administrator</strong>.</p>
            <h2>Qualifications and Responsibilities</h2>
            <strong>All test proctors must:</strong>
            <ul>
              <li>be at least 18 years of age.</li>
              <li>be able to read, write, speak and understand English.</li>
            </ul>
            Each school requires an <strong>Administrator </strong> whose responsibilities include the following:
            <ul>
              <li>Coordinate activities with the proctor(s)</li>
              <li>Administer every examination according to the prescribed procedures and guidelines.</li>
              <li>Use secure check-in procedures for test takers. Verify the test taker's identity before admitting each
                test taker to the testing room.
              </li>
              <li>Monitor test takers.</li>
              <li>Maintain confidentiality of passwords for access to the test administration system.</li>
            </ul>
            <p><strong>Each school requires one or more proctors, whose responsibilities include the following:</strong>
            </p>
            <ul>
              <li>Monitor the testing room to maintain security.</li>
              <li>Interact with the testing station to start or pause tests.</li>
              <li>Report any irregularities to the Administrator and/or ETS.</li>
            </ul>
            <p><strong>A proctor must not perform any duties other than proctoring the test while a testing session is
              in progress. </strong></p>
            <p><strong>At least one Administrator or Proctor must be present within every testing room at all times
              during all testing sessions. </strong></p>
            <p><strong>Each test center is required to provide Administrators and Proctors in the following proportions,
              per testing
              room at each test administration:</strong></p>
            <ul>
              <li>1-25 test takers require 1 Proctor</li>
              <li>26–40 test takers require 2 Proctors</li>
              <li>41–80 test takers require 3 Proctors</li>
            </ul>
            <p>Each center should have more than one certified TCA to allow for a replacement in case one TCA is
              unavailable.</p>
            <h2>Proctor Requirements and Duties </h2>
            <p><strong>Phones and electronic devices:</strong> No personal electronic devices are permitted in the
              testing room. Such items include but are not limited to: personal cell phones, unless being used for test
              center business such as contacting the Global Help Desk; PDA devices; electronic books; tablets.</p>

          </div>

        </div>

      </div>
    </Layout>

  )

}

export default proctoring
//export default withAuthenticator(proctoring, true)