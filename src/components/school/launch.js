import React from "react"
import "jquery/dist/jquery.js"
import { graphql, Link, useStaticQuery } from "gatsby"
import $ from "jquery"
import { MobileView, osName, osVersion, isMobile } from "react-device-detect"
import plus from "../../images/plus.png"
import icon from "../../images/DesktopIcon.png"
import pdf from "../../pdf/ETS_ELC_Student_Activity.pdf"
import pdf2 from "../../pdf/ETS_ELC_Student_Problem_Report.pdf"
// import sebwin from "../../static/software/SafeExamBrowserInstaller.exe"
// import sebmac from "../../static/software/SafeExamBrowser2.1.3.dmg"

//import openWithWin from "../../images/openWithSEBWin.PNG"
//import DownloadBlock from "../shared/downloadblock"


function openOne() {
  $(".hidden-1").toggleClass("opened")
  $(".icon").toggleClass("active")
}

function openTwo() {
  $(".hidden-2").toggleClass("opened")
  $(".icon2").toggleClass("active")
}

function openThree() {
  $(".hidden-3").toggleClass("opened")
  $(".icon3").toggleClass("active")
}

function openFour() {
  $(".hidden-4").toggleClass("opened")
  $(".icon4").toggleClass("active")
}

function openFive() {
  $(".hidden-5").toggleClass("opened")
  $(".icon5").toggleClass("active")
}

function openSix() {
  $(".hidden-6").toggleClass("opened")
  $(".icon6").toggleClass("active")
}



const Launch = () => {
  console.log(osName)
  let supportedOS = false
  let downloadLink
  downloadLink = ""
  let downloadText = "Download & install Secure Browser on your "
  switch (osName) {
    case "Windows":
      // code block
      console.log("windows" + osName)
      downloadLink =
        "https://github.com/SafeExamBrowser/seb-win/releases/download/v2.3/SafeExamBrowserInstaller.exe"
      downloadText = downloadText + osName + " " + osVersion + " device"
      supportedOS = true
      break
    case "Mac OS":
      // code block
      downloadLink =
        "https://github.com/SafeExamBrowser/seb-mac/releases/download/2.1.3/SafeExamBrowser-2.1.3.dmg"
      downloadText = downloadText + osName + " " + osVersion + " device"
      supportedOS = true
      break
    default:
      // code block
      console.log("Not Supported" + osName)
      downloadText =
        "ELC Entry is only supported on Windows and Mac. Your OS is " + osName
  }
  const data = useStaticQuery(graphql`
      query {
          allFile(filter: {sourceInstanceName: {eq: "software"}}) {
              edges {
                  node {
                      publicURL
                      name
                  }
              }
          }
      }
  `)
  return (
    <div className="container bodyelc">
      <main role="main">
        <div className="row text-center">
          <div className="col-md-12 mb-4">
            <h1 className="jumbotron-heading">欢迎登入ELC Entry 测试界面。</h1>
          </div>
        </div>
        <div className="test-day">
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <h2>Before Test Day</h2>

              <p>
                <strong>Technical Co-Ordinator: </strong>
                <i>Before starting, quit all programs.</i>
              </p>
              <p>
                <i>On each computer that the student will use for testing:</i>
              </p>
            </div>
            <MobileView className="warning">
              <strong>
                Your device is not supported. To launch the placement test,
                login using a Windows PC with a Windows 7, 8.1 or 10 operating
                system, or a Macintosh with a Mac OS X v10.12 or higher
                operating system.
              </strong>
            </MobileView>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-12 border d-flex align-items-stretch step">
              <div className="w-100 p-2 d-flex align-items-center">
              <MobileView>
                  <h5>
                    Step 1: Download &amp; install Secure Browser on a supported
                    device.
                  </h5>
                  <strong>
                    <p>Save the test launch file to the desktop.</p>
                  </strong>
                </MobileView>
                <div className="instruction">
                  <div id="desktop" className=" mr-auto">
                    <h5>Step 1:</h5>
                    <p>{downloadText}</p>
                  </div>
                  <div className="mt-4">
                    <p>
                      If you have trouble with the download, try the alternate download link for your device
                      {data.allFile.edges.map((file, index) => {
                        return (

                          <a className="screenlink" href={file.node.publicURL} download>
                            {file.node.name === "SafeExamBrowserInstaller" ? "Windows" : "Mac"}
                          </a>


                        )
                      })}
                    </p>
                  </div>
                </div>
                <div id="desktop" className="link ml-auto">
                  <div>
                    <a
                      href={downloadLink}
                      className="btn btn-home-top btn btn-secondary"
                    >
                      Download Secure Browser
                    </a>
                  </div>

                </div>

              </div>


            </div>

            <div className="col-md-12 border d-flex align-items-stretch step">
              <div className="w-100 p-2 d-flex align-items-center">
                <div className="instruction">
                  <div className="mr-auto">
                    <h5>Step 2:</h5>
                    <p>Download the test launch file elcTestStart.seb.</p>
                  </div>
                </div>
                <div id="desktop" className="link ml-auto">
                  <a
                    href="https://researchtech1.ets.org/c3.net/Falcon/FalconStartProd.seb"
                    className="btn btn-home-top btn btn-secondary"
                  >
                    <strong>Download Test Launch</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-12 border d-flex align-items-stretch step">
              <div className="w-100 p-2 d-flex align-items-center">
                <div className="instruction">
                  <div className="mr-auto">
                    <h5>Step 3:</h5>
                    <p>
                      Locate the test launch file titled elcTestStart.seb inside
                      your computer's Download folder.
                      <br/> Drag and drop the file onto the desktop.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 border d-flex align-items-stretch step p-2 pl-4 pr-4">
              <div className="w-100 d-flex align-items-center">
                <div>
                  <h5>Step 4:</h5>
                  <p>
                    Double click the launch file that you saved to your desktop.
                  </p>
                </div>
              </div>
              <div className="icon-box text-center">
                <img className="icon-pic" src={icon} alt="icon"/>
                <br/>
                <small>
                  <i>Launch file icon depicted above</i>
                </small>
              </div>
            </div>
            <div className="col-md-12 border d-flex align-items-stretch step p-2 pl-4 pr-4">
              <div className="w-100">
                <div>
                  <h5>Step 5:</h5>
                  <p>
                    Enter the Tech Check login ID provided to you by your
                    school’s ELC Assessment Coordinator.
                    <br/> This will log you into the Tech Check. Complete the
                    Tech Check.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p>
                <Link
                  className="mt-4 mb-4 btn btn-home-top btn btn-secondary"
                  to="trouble_shooting"
                >
                  View our Toubleshooting Guide
                </Link>
              </p>
              <p className="mb-2">
                <strong> Recommended for Proctor:</strong> Use the practice test
                IDs provided to you by your school's ELC coordinator to launch
                the practice test and familiarize yourself with the test items.
                This will help you better guide your students. Follow the test
                day procedures below.
              </p>
            </div>

            <div className="text-center">
              <p>
                <strong> Recommended: </strong>Perform trial runs of the
                practice test using a small group of students to validate that
                everything is ready.
                <br/>
              </p>
            </div>
          </div>
        </div>

        <div className="test-day mt-4 mb-4">
          <div className="row pb-4">
            <div className="col-md-12 text-center">
              <h2>On Test Day</h2>

              <p>
                <strong>Proctor: </strong>
                <i>
                  Confirm that you have login ID for all students taking the
                  test today.
                </i>
              </p>

              <p>
                <i>
                  Download and print:{" "}
                  <a target="_blank" rel="noopener noreferrer" href={pdf}>
                    Student Activity Sheet
                  </a>{" "}
                  and{" "}
                  <a target="_blank" rel="noopener noreferrer" href={pdf2}>
                    Student Problem Report
                  </a>
                </i>
              </p>
              <br/>

              <p>
                <i>On each computer that the student will use for testing:</i>
              </p>
            </div>
          </div>

          <div className="row d-flex">
            <div className="col-md-12 border d-flex align-items-center step p-2 p-2 pl-4 pr-4">
              <div className="instruction w-100">
                <h5> Step 1:</h5>
                <p>
                  Double click the ELC Test Launch File from the desktop to
                  start the test.
                </p>
              </div>
              <div className="icon-box text-center">
                <img className="icon-pic" src={icon} alt="icon"/>
                <br/>
                <small>
                  <i>Launch icon depicted above</i>
                </small>
              </div>
            </div>

            <div className="col-md-12 border step d-flex align-items-stretch align-items-center p-2 pl-4 pr-4">
              <div className="w-100">
                <h5>Step 2:</h5>
                <p>
                  Ask students to enter their Login ID provided by ETS to your
                  school’s ELC Assessment Coordinator.
                </p>
              </div>
            </div>

            <div className="col-md-12  border  step d-flex align-items-stretch align-items-center  p-2 pl-4 pr-4">
              <div className="w-100 align-items-center">
                <h5>Step 3:</h5>
                <p>
                  Complete the Student Activity Sheet, listing all students who
                  take or attempt to take the test
                </p>
              </div>
            </div>
            <div className="col-md-12 border step p-2 pl-4 pr-4 d-flex align-items-stretch align-items-center">
              <div className="w-100 align-items-center">
                <h5>Step 4:</h5>
                <p>
                  Update the Student Problem Report if any student experiences a
                  technical problem.
                </p>
              </div>
            </div>
          </div>
          <p>
            <strong>
              At the end of the testing session, return all Student Activity and
              Problem Reports to your school's Assessment Coordinator.
            </strong>
          </p>
        </div>

        <div className="test-day mb-4">
          <div className="row mt-4">
            <div className="col-md-12 text-center mb-4">
              <h2>ETS ELC System And Bandwidth Requirements</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h3>Student Testing Requirements</h3>
              <p>
                Here are the minimum system requirements for the ETS ELC suite:
              </p>
              <div className="testing-req mt-4">
                <div
                  className=" head-btn text-center d-flex justify-content-between align-items-center"
                  onClick={openOne}
                >
                  <h5>Secure Testing</h5>
                  <div className="icon">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-1">
                <p>
                  Use ETS provided secure testing browser for ETS ELC testing.
                  With proper set-up, these tools prevent students from
                  accessing other websites during testing.
                </p>

                <table className="table">
                  <thead>
                  <tr>
                    <th>Device</th>
                    <th>Operating System</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Windows PC</td>
                    <td>Windows 7, 8.1 or 10</td>
                  </tr>
                  <tr>
                    <td>Macintosh</td>
                    <td>Mac OS X v10.12 or higher</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td colSpan="2">
                      Recommended: Set up computer user accounts dedicated to
                      testing and disable digital assistants (Siri, Cortana),
                      voice dictation, and unsupported screen readers
                      (ChromeVox and VoiceOver)
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>

              <div className="testing-req">
                <div
                  className="head-btn text-center d-flex justify-content-between align-items-center"
                  onClick={openTwo}
                >
                  <h5>Hardware Specifications </h5>{" "}
                  <div className="icon2">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-2">
                <p>
                  Computer hardware must meet the minimum requirements specified
                  by the manufacturers of the operating system and browser in
                  use. Hardware that exceeds the minimum is recommended for an
                  optimal experience. For computer display, follow these
                  specifications:
                </p>
                <ul>
                  <li>Screen Resolution Minimum: 1024 x 768</li>

                  <li>Scaling or Zoom: 100%</li>

                  <li>Color Depth: 32-bit recommended (minimum 16-bit)</li>
                </ul>

                <h4>Headphones for Students</h4>
                <p>
                  Students can hear questions through audio playback. For the
                  best experience, use headphones. In addition, there are
                  specific headphone recommendations for testing with ETS ELC:
                </p>
                <ul>
                  <li>No Bluetooth headphones</li>
                  <li>Over the ear, not buds</li>
                  <li>Noise cancellation</li>
                  <li>
                    Boom microphone, on the end of a stiff arm that extends in
                    front of the student’s mouth rather than attached to the
                    headphone cord
                  </li>
                  <li>USB connection for better sound quality</li>
                </ul>
              </div>

              <div className="testing-req">
                <div
                  className="head-btn text-center  d-flex justify-content-between align-items-center"
                  onClick={openFour}
                >
                  <h5>Network Bandwidth</h5>{" "}
                  <div className="icon4">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-4">
                <p>
                  The following bandwidth recommendations are based on best
                  estimate calculations. Test sites that do not meet these
                  recommendations will be able to deliver assessments, but they
                  may experience delays.
                </p>
                <ul>
                  <li>3 Mbps for every 30 computers concurrently testing.</li>
                  <li>
                    Look for limitation points in your internal network (such as
                    school-to-district connections when the district has the
                    main Internet connection).
                  </li>
                  <li>
                    You may need to calculate the bandwidth requirements
                    separately for each test season, depending on the tests
                    planned. The requirements increase when you test more
                    students, more subjects, or more schools.
                  </li>
                </ul>

                <p>
                  <u>Note:</u> Additional bandwidth is needed at the beginning
                  of each ETS ELC test. The initial load is approximately 3.5
                  MB, and the load time varies based on available bandwidth. To
                  perform an Internet speed test, use a website such as
                  www.speedtest.net and select Fairfax, VA (the primary location
                  of ETS ELC servers). For each building where testing will take
                  place, perform the test at different times during the school
                  day.
                </p>
              </div>
              <div className="testing-req">
                <div
                  className="head-btn text-center d-flex justify-content-between align-items-center"
                  onClick={openFive}
                >
                  <h5>Wireless Recommendations</h5>{" "}
                  <div className="icon5">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-5">
                <p>
                  Here are general guidelines for Wireless Access Points (WAPs),
                  based on 802.11 g, n, or ac:
                </p>
                <ul>
                  <li>Under 25 devices per WAP = acceptable</li>
                  <li>Between 26 to 50 devices = check the performance</li>
                  <li>
                    Over 50 devices = try to decrease the number of device
                  </li>
                  <li>WAP in the same room as the testing devices</li>
                </ul>

                <p>
                  In the WAP configuration, strive to limit connections to just
                  testing devices. Also, limit devices to connect only with the
                  closest WAP (for example, avoid overlapping channels and
                  disable promiscuous mode on devices). During testing, monitor
                  for interference from rogue WAPs, non-testing devices, and
                  non-testing activities, like iOS updates. If errors occur, try
                  disabling automatic load balancing.
                </p>
              </div>
              <div className="testing-req">
                <div
                  className="head-btn text-center  d-flex justify-content-between align-items-center"
                  onClick={openSix}
                >
                  <h5>Firewall Whitelist and Email Configuration</h5>{" "}
                  <div className="icon6">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-6">
                <p>
                  For the following URLs, you should: add to your white lists,
                  exclude from caching, and prioritize the traffic. Update both
                  hardware (such as firewall, content filter, and proxy
                  server/cache) and software (such as antivirus and anti-
                  malware). Allow the changes to propagate before testing.
                </p>
                <h5>Sites for test and administration:</h5>
                <strong>For ETS ELC suite:</strong>
                <ul>
                  <li>ets.org</li>
                  <li>researchtech1.ets.org</li>
                  <li>amplifyapp.com</li>
                  <li>innovation.ets.org</li>
                  <li>elc.innovation.ets.org</li>
                </ul>
                <strong>
                  Allow in email spam filter (both server and clients):
                </strong>
                <p>*@ets.org</p>
              </div>
            </div>
          </div>
        </div>

        {/*<p>*/}
        {/*  <img*/}
        {/*    className="openwith"*/}
        {/*    src={openWithWin}*/}
        {/*    alt="Open With Windows"*/}
        {/*  />*/}
        {/*</p>*/}
      </main>
    </div>
  )
}

export default Launch
